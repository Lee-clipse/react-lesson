import React from "react";

function Index0202() {
  const age = prompt("당신의 나이는?", "");
  let message = "";
  // TODO

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 1: 나이 검사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>나이 `age`를 입력 받아서 아래 조건에 맞게 `message`를 출력하시오.</div>
        <div>20살 이상이라면 "성인입니다"를 출력하고,</div>
        <div>그렇지 않다면, "성인이 아닙니다"를 출력하시오. </div>

        <div className="title">답</div>
        <div>message: {message}</div>
      </div>
    </div>
  );
}

export default Index0202;

/*
  if (age >= 20) {
    message = "성인입니다!";
  } else {
    message = "성인이 아닙니다!";
  }
*/
