import React, { useState, useEffect } from "react";
import ProductModal from "./Components/ProductModal";

function Index1009() {
  const [myMoney, setMyMoney] = useState(10000);

  const productList = [
    { id: 1, name: "보드마카", price: 1000 },
    { id: 2, name: "노트", price: 2000 },
    { id: 3, name: "양말", price: 2500 },
  ];

  const [selectedProduct, setSelectedProduct] = useState({});
  const [productModal, setProductModal] = useState(false);

  function selectProduct(product) {
    setSelectedProduct(product);
    setProductModal(true);
  }

  function payment(price) {
    let money = myMoney - price;
    setMyMoney(money);
    alert(`${price} 결제완료 되었습니다.`);
    setProductModal(false);
  }

  return (
    <>
      {productModal && (
        <ProductModal
          product={selectedProduct}
          closebtn={() => setProductModal(false)}
          payment={(price) => payment(price)}
        />
      )}

      <div>
        <div id="lesson-title">예제 8: 상품 모달</div>
        <div id="lesson-content">
          <div className="title">예제</div>
          <div>
            1. 상품을 클릭하면 해당 상품의 정보를 조회하는 모달이 등장한다.
          </div>
          <div>2. 총 10,000원의 금액에서 결제를 수행할 수 있다.</div>
        </div>

        <div id="lesson-content">
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
        <div>통장잔액 {myMoney}</div>
      </div>
    </>
  );
}

export default Index1009;
