import React, { useState } from "react";
import styled from "styled-components";

function ProductModal2({ product, closebtn, addProduct }) {
  const [qty, setQty] = useState(0);

  return (
    <Background>
      <Wrapper>
        <div onClick={() => closebtn()}>닫기</div>

        <div>
          <div>상품 번호: {product.id}</div>
          <div>
            {product.name} / {product.price}원
          </div>
          <input type="number" onChange={(e) => setQty(e.target.value)} />
          <div onClick={() => addProduct(product, qty)}>담기</div>
        </div>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: black;
  opacity: 1;
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

export default ProductModal2;
