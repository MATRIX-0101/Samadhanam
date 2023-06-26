import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Logo from "../assets/smile.png"

function Contacts({ contacts, currentUser, changeChat}) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [Admin,setAdmin] = useState(false);
    console.log(contacts);
    const Contacts = contacts.filter(function(a) {
        
        return a.admin==='100';
    })
    console.log(Contacts);
    useEffect(()=>{
        if(currentUser){
            if(currentUser.admin==="100"){
                setAdmin(true);
            }
        }
        

    }, [currentUser]);

    useEffect(() => {
        if(currentUser ){
            
                // const str = currentUser.firstName+currentUser.lastName+currentUser.registrationnumber;
            setCurrentUserImage(currentUser.avatarImage);
            // setCurrentUserName(currentUser.firstname);
            setCurrentUserName(currentUser.firstname+"_"+currentUser.lastname+"_"+currentUser.registrationnumber);
            
            
        }
    }, [currentUser]);


    const changeCurrentChat = (index, contact) => {
        
        setCurrentSelected(index);
        changeChat(contact);
        
        
    };
    if(Admin){
        return <>
        {
            currentUserImage && currentUserName && (
                
                    
                
                <Container>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h7>samadhanam</h7>
                    </div>
                    <div className="contacts">
                         {
                            contacts.map((a, index)=> {
                                return (
                                    <div className={`contact ${index === currentSelected ?"selected" : ""
                                    }`} 
                                    key={index}
                                    onClick={()=>changeCurrentChat(index,a)}
                                    >
                                        <div className="avatar">
                                            <img 
                                            src={`data:image/svg+xml;base64,${a.avatarImage}`} 
                                            alt="avatar"
                                             />
                                        </div>
                                        <div className="username">
                                            {/* <h6>{contact.firstname}</h6> */}
                                            <h6>{a.firstname+"_"+a.lastname+"_"+a.registrationnumber}</h6>
                                        </div>
                                    </div>
                                );
                            })
                         }
                    </div>

                    <div className="current-user">
                        <div className="avatar">
                            <img 
                            src={`data:image/svg+xml;base64,${currentUserImage}`} 
                            alt="avatar"
                             />
                        </div>
                        <div className="username">
                            <h6>{currentUserName}</h6>
                        </div>
                    </div> 

                </Container>
            )
        }
    </>
} else{
    return <>
        {
            currentUserImage && currentUserName && (
                
                    
                
                <Container>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h7>samadhanam</h7>
                    </div>
                    <div className="contacts">
                         {
                            Contacts.map((contact, index)=> {
                                return (
                                    <div className={`contact ${index === currentSelected ?"selected" : ""
                                    }`} 
                                    key={index}
                                    onClick={()=>changeCurrentChat(index,contact)}
                                    >
                                        <div className="avatar">
                                            <img 
                                            src={`data:image/svg+xml;base64,${contact.avatarImage}`} 
                                            alt="avatar"
                                             />
                                        </div>
                                        <div className="username">
                                            {/* <h6>{contact.firstname}</h6> */}
                                            <h6>{contact.firstname+"_"+contact.lastname+"_"+contact.registrationnumber}</h6>
                                        </div>
                                    </div>
                                );
                            })
                         }
                    </div>

                    <div className="current-user">
                        <div className="avatar">
                            <img 
                            src={`data:image/svg+xml;base64,${currentUserImage}`} 
                            alt="avatar"
                             />
                        </div>
                        <div className="username">
                            <h6>{currentUserName}</h6>
                        </div>
                    </div> 

                </Container>
            )
        }
    </>
}
    }
    

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          img {
            height: 2rem;
          }
          h7 {
            color: white;
            text-transform: uppercase;
            
          }
    }
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.8rem;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
                background-color: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        .contact {
            background-color: #ffffff39;
            min-height: 5rem;
            width: 90%;
            cursor: pointer;
            border-radius: 0.2rem;
            padding: 0.4rem;
            gap: 1rem;
            align-items: center;
            display: flex;
            transition: 0.5s ease-in-out;
            .avatar {
                img {
                    height: 2rem;
                }
            }
            .username {

                h7 {
                    color: white;
                    font-size: 1rem;
                }
            }
        }
        ${'' /* find selected  */}
        .selected { 
            background-color: #9186f3;
        }
    }
    .current-user {
        background-color: #0d0d30;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 2rem;
        .avatar {
            img {
                height: 4rem;
                max-inline-size: 100%;
            }
        }
        .username {
            font-size: 1rem;
            h7 {
                color: white;
            }
        }
        @media screen and (min-width: 720px) and (max-width: 1000px){
            gap: 0.5rem;
            .username {
                h2 {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export default Contacts;