import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute,host } from "../utils/APIRoutes"
import Contacts from "../components/Contacts"
import Welcome from '../components/welcome';
import ChatContainer from '../components/ChatContainer';
import { io } from 'socket.io-client';
function Chat() {
// function Chat({socket}) {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat,setCurrentChat] = useState(undefined);
  const [isLoaded,setIsLoaded] = useState(false);
  const [onlineUsers,setOnlineUsers] = useState([]);
  useEffect(() => {
    const setDefaultlogin = async() =>{
        
        if(!localStorage.getItem("web-chat-user")) {
            navigate("/login"); 
        }
        else {
          
          setCurrentUser(await JSON.parse(localStorage.getItem("web-chat-user")));
          setIsLoaded(true);
        }
    };
    setDefaultlogin();
    
}, []);

useEffect(()=>{
  if(currentUser) {
    // socket.current = io("http://localhost:5000",{ transport: ['websocket'] });
    // console.log(socket.current.connected);
    // socket.current = io("http://localhost:5000", { transport: ['websocket' ] });
    socket.current = io('http://localhost:5000');
    // console.log(socket.current.connected);
      // socket.current.on('get-users',(users)=>{
      //   setOnlineUsers(users);
      // })

    socket.current.emit("add-user",currentUser._id);

    socket.current.on("online-users",(users)=>{
      setOnlineUsers(users);
    })
    

    console.log(currentUser._id)
  }

},[currentUser])

// useEffect(()=>{
//   if(currentUser){
// socket.current = io('http://localhost:5000');

// socket.current.emit("add-user",currentUser._id);
// socket.current.on('get-users',(users)=>{
//   setOnlineUsers(users);
// })
//   }
// },[currentUser]);



 useEffect(() => {
   const setAvatarAgain = async() =>{
      if(currentUser){
      if(currentUser.isAvatarImageSet) {
           const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
           setContacts(data.data);
       }
       else {
         navigate("/setAvatar");
       }
      }
   };
   setAvatarAgain();
  
 }, [currentUser]);

 const handleChatChange = (chat) => {
  setCurrentChat(chat);

 }
 const checkStatus=(currentChat)=>{
  if(currentChat !== undefined){
  if(isUserOnline(currentChat._id)) return true;

  }
  return false;
 }
 const isUserOnline = (userId) => onlineUsers.includes(userId);
  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />

        {
          isLoaded && currentChat === undefined ?(
          <Welcome CurrentUser={currentUser} />) :
          (
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} isOnline = {checkStatus(currentChat)} />
          )

        }
      
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw; 
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1000px){
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;



