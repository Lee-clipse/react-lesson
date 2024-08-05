import React, { useState } from "react";

function Index0206() {
  function checkIsAdult() {
    const age = prompt("당신의 나이는?", "");
    if (age >= 20) {
    }
  }

  const [isAdult, setIsAdult] = useState(false);

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 5: 조건부 렌더링</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`성인 인증` 버튼을 클릭하면 나이를 입력받은 후, </div>
        <div>20살 이상이라면 "성인입니다"를 조건부 렌더링하시오.</div>

        <div className="title">답</div>
        <div className="link-button" onClick={() => checkIsAdult()}>
          성인 인증
        </div>
        <h1>{isAdult && "성인입니다"}</h1>
      </div>
    </div>
  );
}

export default Index0206;
