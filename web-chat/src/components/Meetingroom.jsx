import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
function meetingroom(){
    //console.log("meeting");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { roomId }= useParams();
    const myMeeting = async (element) => {
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
    }
    return(
        <div>
            <div ref={myMeeting}/>
        </div>
    );
}
export default meetingroom;
