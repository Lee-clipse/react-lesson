import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNoteList } from "../Utils/utils";

const ViewNoteModal = ({ noteId, closeModal, deleteNote, modifyNote }) => {
  const [note, setNote] = useState({});

  useEffect(() => {
    const noteList = getNoteList();
    noteList.map((note) => {
      if (note.id === noteId) {
        setNote(note);
      }
    });
  }, []);

  return (
    <Background>
      <Wrapper>
        <div onClick={() => closeModal()}>닫기</div>

        <div>
          <div>제목</div>
          <input
            type="text"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <div>내용</div>
          <input
            type="text"
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          />
          <div onClick={() => deleteNote(note)}>삭제하기</div>
          <div onClick={() => modifyNote(note)}>수정하기</div>
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

export default ViewNoteModal;
