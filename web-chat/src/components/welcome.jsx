import React from 'react';
import styled from "styled-components";
import Robot from "../assets/smiley.gif";

export default function welcome( {currentUser} ) {
  return( 
  
  <Container>
    <img src={Robot} alt="Robot" />
    <h1>
        Welcome, <span>bro!</span> 

    </h1>
    <h3>
        Please select someone from list to start conversation
    </h3>
  </Container>
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
`;
