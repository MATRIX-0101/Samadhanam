
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Meetingroom from "./Meetingroom";
import { useState } from "react";
import styled from 'styled-components';
import { MdVideoCall } from "react-icons/md";
export default function Join({currentUser}){
    const navigate = useNavigate();
    const [value,setValue] = useState("");

    useEffect(()=>{
        if(currentUser){
            setValue(currentUser.firstname);
        }
    })

const handleClick = ()=> {
    
    navigate(`/meetingroom/${value}`);
    // window.location.reload();
    
}
    return(
        
            <Button onClick={()=>handleClick()}>
            <MdVideoCall/>
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
