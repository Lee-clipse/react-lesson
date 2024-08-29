import React, { useState, useEffect } from "react";

function Index0906() {
  const MONEY = 10000;

  const [shoppingCart, setShoppingCart] = useState([{}]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // 2
  // API를 요청하듯, 새로고침시 `requestProductData()` 함수 호출 후 데이터 저장

  // 3
  function handleCheckProduct(product) {
    const isSelectedProduct = selectedProducts.includes(product);
    if (isSelectedProduct) {
      // 방금 클릭한 상품이 이미 담겨있다면? => 삭제
      const newProductList = selectedProducts.filter((item) => item !== product);
      setSelectedProducts(newProductList);
    } else {
      // 방금 클릭한 상품이 담겨있지 않다면? => 담기
      setSelectedProducts([...selectedProducts, product]);
    }
  }

  // 4, 5
  function payment() {}

  return (
    <div>
      <div id="lesson-title">예제 5: 만원의 행복</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. shoppingCart라는 이름의 자료구조가 있다.</div>
        <div>2. 각 product는 이름, 가격으로 이루어져 있다.</div>
        <div>3. 각 product의 좌측 체크박스를 눌러 선택할 수 있다.</div>
        <div>4. `결제하기` 버튼을 누르면 체크한 상품들의 가격 합이 계산된다.</div>
        <div>5. 가격 합이 10000원보다 작다면 결제 성공, 그렇지 않다면 결제가 실패한다.</div>
      </div>

      <div>
        {shoppingCart.map((product, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckProduct(product)}
              checked={selectedProducts.includes(product)}
            />
            {product.name} - {product.price}원
          </div>
        ))}
      </div>
    </div>
  );
}

function requestProductData() {
  return [
    {
      name: "볼펜",
      price: 1000,
    },
    {
      name: "샤프",
      price: 2000,
    },
    {
      name: "공책",
      price: 3500,
    },
    {
      name: "선물 상자",
      price: 4000,
    },
    {
      name: "필통",
      price: 5000,
    },
    {
      name: "미니 선풍기",
      price: 6000,
    },
  ];
}

export default Index0906;
