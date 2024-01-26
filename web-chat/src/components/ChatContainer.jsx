import React , { useState, useEffect, useRef, useReducer } from 'react';
import Join from './Join.jsx';

import {Box} from '@chakra-ui/react'
import styled from 'styled-components';
import Logout from './Logout';
import ChatInput from './ChatInput';
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes.js';
import axios from 'axios';
import { v4 as uuidv4} from "uuid";
import {DateTime} from 'luxon';
import { BsCheck2All } from 'react-icons/bs';
export default function ChatContainer({currentChat,currentUser,socket,isOnline}) {
  // console.log(currentChat);
    const [messages, setMessages] = useState([]);
    const [arrivalMessage,setArrivalMessage] = useState(null); 
    
    const scrollRef = useRef();
     
useEffect(() => {
      // console.log("Current chat ID:", currentChat?._id);
    
      const getResponse = async () => {
        if (currentChat) {
          const response = await axios.post(getAllMessagesRoute, {
            from: currentUser._id,
            to: currentChat._id,
          });
          // console.log({ response.data. });
          console.log(response.data);
          setMessages(response.data);
        }
      };
    
      getResponse();
    
      if (socket.current) {
        socket.current.on("msg-receive", (msg, senderId) => {
          // console.log("Received message:", msg);
          // console.log("Sender ID:", senderId);
          
          if (senderId === currentChat?._id) {
            // console.log("Received message from current chat");
            setArrivalMessage({ fromSelf: false, message: msg });
          }
         
        });
      }
    
      return () => {
        if (socket.current) {
          socket.current.off("msg-receive");
        }
      };
    }, [currentChat]);

    useEffect(()=>{
      let lastMessageByAnotherUser = true;
      lastMessageByAnotherUser = messages.length && messages[messages.length-1].fromSelf;
      
      if(!lastMessageByAnotherUser && socket.current ){
        
        socket.current.emit("setAllMessagesSeen", { 
          currentUserId:currentUser._id,
          currentChatId:currentChat._id
        });
      }
      
    },[socket,messages,currentChat]);

    //new useEffect
    useEffect(()=>{
       if(socket.current){
        socket.current.on("messagesSeen",()=>{
          
          
            setMessages((prev) =>{
              const updateMessages = prev.map((message) =>{
                if(!message.seen){
                  return{
                    ...message,
                    seen:true
                  }
                }
                return message;
              })
              return updateMessages;
            })
        
        })
       }
    },[socket])
 
   //formate time
   const formatTime = (timeString)=>{
    const[hour,minute] = timeString.split(':').map(Number);
    const period = hour >= 12?'PM':'AM';
    const formattedHour = hour%12||12;
    const formattedTime = `${formattedHour}:${minute < 10?'0':''}${minute}${period}`;
    return formattedTime;
   }
    //handleUTC time 
    const handleUTC = (timeString)=>{
      const time = DateTime.fromISO(timeString,{zone:'utc'});
      const istDateTime = time.setZone('Asia/Kolkata');
      const formattedIST = istDateTime.toFormat('yyyy-MM-dd HH:mm:ss.SSS ZZZZ');
      // console.log(formattedIST);
      const timePart = formattedIST.slice(11,16);
      
      // console.log(timePart);
      return formatTime(timePart);
    }
    const handleCurrentTime = ()=>{
      const currentDateTime = new Date();
        const timeIso = currentDateTime.toISOString();
        // console.log(timeIso);
        return timeIso;
    }
    
    const handleSendMsg = async (msg) => {
        await axios.post(sendMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
            message:msg,
        });
        socket.current.emit("send-msg",{
            to: currentChat._id,
            from: currentUser._id,
            message: msg,
        });
        const msgs = [...messages];
        
        msgs.push({ fromSelf: true, message: msg,time:handleCurrentTime(),seen:false});
        setMessages(msgs);
    };

    

    useEffect(() => {
        // arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
        if(arrivalMessage){
        const msgs = [...messages];
        const currentDateTime = new Date();
        const timeIso = currentDateTime.toISOString();
        msgs.push({fromSelf:false,message:arrivalMessage.message,time:handleCurrentTime(),seen:false})
        console.log(msgs);
        setMessages(msgs);
        }
    }, [arrivalMessage]);

    useEffect(()=> {
        scrollRef.current?.scrollIntoView({behaviour:"smooth"});
    }, [messages]);
    
    // console.log("current chat is ",currentChat);
    return( 
    <>
    {currentChat &&(
        <Container>
        
        <div className='chat-header'>
            <div className='user-details'>
                <div className='avatar'>
                <img 
                    src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} 
                    alt="avatar"
                />
                </div>
                <div className='username'>
                    <h3>{currentChat.firstname}</h3>
                    {isOnline? <div className="online">online</div>:<div className="offline">offline</div>}
                </div>
               
            </div>
            <Join currentUser={currentUser}/>
            <Logout socket={socket}/>
            
        </div>
        
        
        <div className="chat-messages">
            {
                messages.map((message) => {
                    return (
                        <div ref={scrollRef} key={uuidv4()}>
                            <div className={`message ${message.fromSelf ? "sended":"received"}`}>
                                <div className="content">
                                {message.message}
                               
                                {/* <Box alignself={"flex-end"}  fontWeight={"bold"}> */}
                                  {message.fromSelf?<BsCheck2All className = {`${message.seen?"seen":"unseen"}`}  size = {16}/>:null}
                                {/* </Box> */}
                
                                    <div className="timePart">{handleUTC(message.time)}</div>
                                </div>
                                
                            </div>
                            
                        </div>
                    );
                })}
        </div>

        <ChatInput handleSendMsg={handleSendMsg} />
  </Container>
    )}
    </>
  );
    
  
}

const Container = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1000px){
    grid-auto-rows: 15% 70% 15%;
  }
  .online{
    color:green;
  }
  .offline{
    color:red;
  }
  .chat-header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    .user-details {
        display:flex;
        align-items: center;
        gap: 1rem;
        .avatar {
            img {
                height: 3rem;
            }
        }
        .username {
            h3 {
                color: white;
            }
        }
    }
  }
  .chat-messages {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 0.2rem;
        }
    }
   
    .message {
       display: flex;
       align-items: center;
       .content {
          max-width: 30%;
          overflow-wrap: break-word;
          padding: 0.4rem;
          margin:0.1rem;
          font-size: 1.1rem;
          border-radius: 0.5rem;
          // color: #d1d1d1;
          color:#dcf8c6;
       }
      }
     
    
     
    .sended {
        justify-content: flex-end;
        .content {
          background-color: #4f04ff21;
        }
        margin-right:0.5rem;
     } 
     
     
     
    }
     .received {
        justify-content: flex-start;
        .content {
          background-color: #075E54;
        }
        margin-left:0.5rem;
    }
   
    .seen{
      color:blue;
    }
     
     
    }
    .timePart{
      // padding:0.001rem;
      color:#777;
      font-size:0.6rem;
      postion:bottom-right;
      
    }
  }
  
`;
