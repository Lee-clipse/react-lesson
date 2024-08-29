import React, { useState, useEffect } from "react";

function Index0905() {
  const [icecreamDB, setIcecreamDB] = useState([{}]);
  const [selectedIcecream, setSelectedIcecream] = useState({});

  // 2
  // API를 요청하듯, 새로고침시 `requestIcecreamData()` 함수 호출 후 데이터 저장

  // 3
  function handleCheckIcecream(icecream) {
    setSelectedIcecream(icecream);
  }

  // 4
  function payment() {}

  return (
    <div>
      <div id="lesson-title">예제 4: 아이스크림 딱 하나</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. shoppingCart라는 이름의 자료구조가 있다.</div>
        <div>2. 각 아이스크림은 이름, 가격으로 이루어져 있다.</div>
        <div>
          3. 각 아이스크림의 좌측 체크박스를 눌러 선택할 수 있다. 이때, 딱 하나의 아이스크림만
          선택할 수 있다.
        </div>
        <div>4. `결제하기` 버튼을 누르면 체크한 상품의 가격이 계산된다.</div>
      </div>

      <div>
        {icecreamDB.map((icecream, index) => (
          <div key={index}>
            <input
              type="radio"
              name="icecream"
              onChange={() => handleCheckIcecream(icecream)}
              checked={selectedIcecream === icecream}
            />
            {icecream.name}: {icecream.price}원
          </div>
        ))}
      </div>
    </div>
  );
}

function requestIcecreamData() {
  return [
    {
      name: "누가바",
      price: 1000,
    },
    {
      name: "바밤바",
      price: 1000,
    },
    {
      name: "하겐다즈",
      price: 5500,
    },
    {
      name: "투게더",
      price: 4000,
    },
    {
      name: "붕어싸만코",
      price: 1500,
    },
  ];
}

export default Index0905;
