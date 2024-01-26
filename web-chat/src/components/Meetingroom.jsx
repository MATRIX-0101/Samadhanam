import React, { useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate, useParams } from "react-router-dom";
import '../pages/style.css';
import { GoArrowLeft } from "react-icons/go";


export default function Meetingroom() {
    const navigate = useNavigate();
   const handleGoBack=()=>{
    navigate("/chat");
    window.location.reload();
    console.log("navigate");
   }
    // window.location.reload();
    const { roomId }= useParams();
    
    const myMeeting = async (element) => {
        try {
            console.log(element);
        const appID = 1890411504;
        const serversecret = "36e2f2e5b56e02215cf3a865352f6638";
        const name = roomId; 
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serversecret,roomId,Date.now().toString(),name);
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        
        zc.joinRoom({ 
            
            container: element,
            
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true
        }) 
        } catch (error) {
            console.log(error);
        }
       
        
    };

    

return(
    <>
    <div className="card-meeting">
        <button onClick={()=>handleGoBack()}><GoArrowLeft/></button>
    <div className="card-inside" ref={myMeeting}/>
    </div>
        
       
    </>
);
}




