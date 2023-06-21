import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from "../utils/APIRoutes"
import Contacts from "../components/Contacts"


function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const setDefaultlogin = async() =>{
        if(!localStorage.getItem("web-chat-user")) {
            navigate("/login");
        }
        else {
          // setCurrentUser("nitin");
          setCurrentUser(await JSON.parse(localStorage.getItem("web-chat-user")));
        }
    };
    setDefaultlogin();
    
}, []);



useEffect(() => {
  const setAvatarAgain = async() =>{
    // console.log(await JSON.parse(localStorage.getItem("web-chat-user")));

      if(currentUser) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
          navigate("/chat");
      }
      else {
        console.log("currentUser is : ", currentUser)
        console.log("setAvatarImage Called")
        // navigate("/setAvatar");
      }
  };
  setAvatarAgain();
  
}, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} />
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
    ${'' /* grid-template-columns: 95% 5%; */}
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1000px){
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
