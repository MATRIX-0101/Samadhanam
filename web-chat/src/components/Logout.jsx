import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BiPowerOff} from 'react-icons/bi';
import {io} from 'socket.io-client'
export default function Logout({socket}) {
    // const socket = useRef();
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        console.log(socket);

        socket.current.emit("logout",socket.current.id);
    console.log(socket.current.id);
        
        
        navigate("/login");
    };

    
    return (
    <Button onClick={handleClick}>
        <BiPowerOff/>
    </Button>
    );
  
}
 const Button = styled.button`
   display: flex;
   justify-items: center;
   align-items:center;
   padding: 0.5rem;
   border-radius: 0.5rem;
   background-color: #9a86f3;
   cursor: pointer;
   svg{
    font-size: 1.3rem;
    color: white;
   }

 `;