import React from "react";

function Index0203() {
  const password = prompt("금고의 4자리 암호를 입력하시오.", "");
  let message = "";
  // TODO

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 2: 금고 암호 검사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>암호 `password`를 입력 받아서 아래 조건에 맞게 `message`를 출력하시오.</div>
        <div>원래 금고 암호인 "okok"가 입력으로 들어오면 "SUCCESS"를 출력하고,</div>
        <div>그렇지 않다면, "FAIL"을 출력하시오. </div>

        <div className="title">답</div>
        <div>message: {message}</div>
      </div>
    </div>
  );
}

export default Index0203;

/*
  if (password === "okok") {
    message = "SUCCESS";
  } else {
    message = "FAIL";
  }
*/
