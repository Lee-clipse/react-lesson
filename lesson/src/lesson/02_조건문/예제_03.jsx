import React from "react";

function Index0204() {
  const weight = prompt("배송을 희망하는 상자 무게를 입력하시오.", "0");
  let weightResult = false;
  // TODO

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 3: 상자 무게 검사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>무게 `weight`를 입력 받아서 아래 조건에 맞게 `weightResult`를 출력하시오.</div>
        <div>무게가 20kg 이하라면 `weightResult`가 true,</div>
        <div>그렇지 않다면, `weightResult`가 false가 되도록 조건문을 작성하시오, </div>

        <div className="title">답</div>
        <div>weightResult: {weightResult ? "배송 가능" : "배송 불가능"}</div>
      </div>
    </div>
  );
}

export default Index0204;

/*
  if (weight <= 20) {
    weightResult = true;
  } else {
    weightResult = false;
  }
*/
