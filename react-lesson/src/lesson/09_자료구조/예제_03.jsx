import React, { useState, useEffect } from "react";

function Index0904() {
  const toppingList = ["양상추", "토마토", "불고기", "새우", "치즈", "치킨"];

  const [burgerDB, setBurgerDB] = useState([{}]);
  const [selectedTopping, setSelectedTopping] = useState("");

  // 2
  // API를 요청하듯, 새로고침시 `requestBurgerData()` 함수 호출 후 데이터 저장

  // 3
  function handelSelectTopping(value) {
    console.log(value);
  }

  // 4
  function getPriceAvg() {}

  return (
    <div>
      <div id="lesson-title">예제 3: 햄버거 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. burgerDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 burger는 이름, 토핑(배열), 가격으로 이루어져 있다.</div>
        <div>
          3. 사용자는 특정 토핑을 하나를 선택하여 해당 토핑이 들어간 버거들을 조회할 수 있다.
        </div>
        <div>4. 토핑 선택으로 나온 모든 버거들의 가격 합을 조회할 수 있다.</div>
      </div>

      <div>
        <select
          onChange={(event) => handelSelectTopping(event.target.value)}
          value={selectedTopping}
        >
          <option value="">토핑을 선택하세요</option>
          {toppingList.map((topping) => {
            return <option value={topping}>{topping}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

function requestBurgerData() {
  return [
    {
      name: "새우 버거",
      topping: ["양상추", "새우"],
      price: 4500,
    },
    {
      name: "불고기 버거",
      topping: ["양상추", "토마토", "불고기"],
      price: 4500,
    },
    {
      name: "불새 버거",
      topping: ["양상추", "불고기", "새우"],
      price: 5500,
    },
    {
      name: "더블 불고기 치즈 버거",
      topping: ["양상추", "불고기", "토마토", "치즈"],
      price: 6000,
    },
    {
      name: "빅맥",
      topping: ["양상추", "불고기", "치즈"],
      price: 6500,
    },
    {
      name: "베이컨 토마토 디럭스",
      topping: ["양상추", "토마토", "불고기", "치즈"],
      price: 6500,
    },
  ];
}

export default Index0904;
