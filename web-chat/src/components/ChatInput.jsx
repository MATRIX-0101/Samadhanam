import React, { useState } from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';

export default function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState('');

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji, event) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          
          {showEmojiPicker && (
            <EmojiPickerWrapper>
              <Picker onEmojiClick={handleEmojiClick} />
            </EmojiPickerWrapper>
          )}
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
        </div>
      </div>
      <form className="input-container" onSubmit={sendChat}>
        <input
          type="text"
          placeholder="type your message here"
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 90%;
  align-items: center;
  background-color: #080420;
  padding: 0.2rem;
  padding-bottom: 0.3rem;

  .button-container {
    display: flex;
    align-items: center;
    color: red;
    gap: 10rem;

    .emoji {
      position: relative;
      z-index: 100;

      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
    }
  }

  .input-container {
    position: fixed;
    width: 60%;
    margin: 2rem;
   
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    background-color: #ffffff34;

    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9186f3;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;

      svg {
        font-size: 2rem;
        color: white;
      }
    }
  } 
`;

const EmojiPickerWrapper = styled.div`
position: absolute;
bottom: calc(60% + 10px);
left: 0;
z-index: 2;

padding: 1rem;
`;