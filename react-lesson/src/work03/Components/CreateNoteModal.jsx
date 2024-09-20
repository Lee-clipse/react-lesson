import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const CreateNoteModal = ({ closeModal, createNote }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleSaveNote() {
    const newNote = {
      id: uuidv4(),
      title: inputTitle,
      content: inputContent,
      createdAt: new Date().toLocaleString("ko-KR"),
    };
    createNote(newNote);
  }

  return (
    <Background>
      <Wrapper>
        <div onClick={() => closeModal()}>닫기</div>

        <div>
          <div>제목</div>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <div>내용</div>
          <input
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          />
          <div onClick={() => handleSaveNote()}>저장하기</div>
        </div>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: black;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: 6;
  background-color: white;
  color: black;
  padding: 1rem;
`;

export default CreateNoteModal;
