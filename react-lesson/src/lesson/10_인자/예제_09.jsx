import React, { useState, useEffect } from "react";
import ProductModal2 from "./Components/ProductModal2";

function Index1010() {
  const productList = [
    { id: 1, name: "보드마카", price: 1000 },
    { id: 2, name: "노트", price: 2000 },
    { id: 3, name: "양말", price: 2500 },
  ];

  const [selectedProduct, setSelectedProduct] = useState({});
  const [productModal, setProductModal] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  function selectProduct(product) {
    setSelectedProduct(product);
    setProductModal(true);
  }

  function getTotalPrice() {
    let sum = 0;
    shoppingCart.map((product) => {
      sum += product.qty * product.price
    })
    return sum;
  }

  function addProduct(product, qty) {
    setShoppingCart([
      ...shoppingCart,
      { name: product.name, qty: qty, price: product.price },
    ]);
    setProductModal(false);
  }

  return (
    <>
      {productModal && (
        <ProductModal2
          product={selectedProduct}
          closebtn={() => setProductModal(false)}
          addProduct={(product, qty) => addProduct(product, qty)}
        />
      )}
      <div>
        <div id="lesson-title">예제 9: 장바구니</div>
        <div id="lesson-content">
          <div className="title">예제</div>
          <div>
            1. 상품을 클릭하면 해당 상품의 정보를 조회하는 모달이 등장한다.
          </div>
          <div>2. 상품의 모달에서 수량을 선택하여 장바구니에 담을 수 있다.</div>
          <div>3. 장바구니에 담긴 상품들을 조회할 수 있다.</div>
          <div>4. 장바구니에 담긴 상품들의 총 가격을 조회할 수 있다.</div>
          <div>
            5. (더 나아가기)같은 상품을 담는다면 수량만 중복해서 갱신할 수 있다.
          </div>
        </div>

        <div id="lesson-content">
          <div>금액: {getTotalPrice()}</div>

          {/* 장바구니 */}
          <div>
            {shoppingCart.map((item) => {
              return (
                <div>
                  {item.name} / {item.qty}개: 총 {item.qty * item.price}원
                </div>
              );
            })}
          </div>

          {productList.map((product) => {
            return (
              <div
                className="link-button"
                onClick={() => selectProduct(product)}
              >
                {product.id}번 상품 선택
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Index1010;
