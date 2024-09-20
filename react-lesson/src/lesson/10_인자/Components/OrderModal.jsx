import React from "react";
import styled from "styled-components";

const OrderModal = ({ order, closeModal }) => {
  return (
    <Background>
      <Wrapper>
        <div onClick={() => closeModal()}>닫기</div>

        <div>
          <div>주문 번호: {order.id}</div>
          <div>주문 목록</div>
          <div>
            {order.list.map((item) => {
              return (
                <div>
                  {item.title} {item.qty}개
                </div>
              );
            })}
          </div>
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

export default OrderModal;
