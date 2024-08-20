import React, { useState } from "react";
import { Modal, Wrapper } from "./style.js";
import { ProductList } from "./const.js";
import CloseIcon from "./images/close.png";
import ShoppingCart from "./Components/ShoppingCart/index.jsx";

function Work0001() {
  const [selectProduct, setSelectProduct] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);

  const [viewModal, setViewModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleModal(product) {
    setSelectProduct(product);
    setViewModal(true);
  }

  function cartListUp() {
    // 상품의 수량 변경
    selectProduct.quantity = quantity;
    setQuantity(1);

    setShoppingCart([...shoppingCart, selectProduct]);

    setViewModal(false);
  }

  return (
    <>
      {viewModal && (
        <Modal>
          <div id="back-drop"></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewModal(false)} />
            </div>
            <div id="m-body">
              <img src={selectProduct.image} alt="" />
              <div>{selectProduct.title}</div>
              <div>${selectProduct.price}</div>
              <div>
                <span>수량</span>
                <input
                  type="text"
                  onChange={(event) => setQuantity(event.target.value)}
                  value={quantity}
                />
              </div>
              <div className="m-btn" onClick={() => cartListUp()}>
                장바구니 담기
              </div>
            </div>
          </div>
        </Modal>
      )}

      <ShoppingCart productData={shoppingCart} />

      <Wrapper>
        <div id="title">메인 페이지</div>

        <div id="list">
          {ProductList.map((product) => {
            return (
              <div
                className="p-box"
                key={product.index}
                onClick={() => handleModal(product)}
              >
                <img src={product.image} alt="" />
                <div className="p-title">{product.title}</div>
                <div className="p-price">${product.price}</div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}

export default Work0001;
