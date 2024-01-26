
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Meetingroom from "./Meetingroom";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
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
}
    return(
        <div>
            <button onClick={()=>handleClick()}>Join</button>
        </div>
        
    );
    
}
