import React from "react";
import styled from "styled-components";

const UserModal = ({ user, closeModal }) => {
  return (
    <Background>
      <Wrapper>
        <div onClick={() => closeModal()}>닫기</div>

        <div>
          <div>아이디: {user.id}</div>
          <div>이름: {user.name}</div>
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

export default UserModal;
