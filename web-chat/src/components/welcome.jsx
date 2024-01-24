import React from 'react';
import styled from "styled-components";
import Robot from "../assets/smiley.gif";
import Logout from './Logout';

export default function Welcome( {currentUser,socket} ) {
  return( 
  <>
    
    <Container>
    <div className="logout"><Logout socket={socket} /></div>
    
    <img src={Robot} alt="Robot" />
    <h1>
        Welcome, <span>{currentUser}!!</span> 

    </h1>
    <h3>
        Please select someone from list to start conversation
    </h3>
    </Container>
  </>
  
  );

}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
  .logout{
   margin-bottom:6.42225rem;
   margin-left:55.6rem;
  }
 
`;
