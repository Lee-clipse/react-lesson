import React, { useState } from "react";

function Index0206() {
  const [isAdult, setIsAdult] = useState(false);
  const [age, setAge] = useState(0);

  function handleInput(inputAge) {
    setAge(inputAge);
  }

  function checkIsAdult() {
    if (age >= 20) {
      setIsAdult(true);
    } else {
      setIsAdult(false);
    }
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 5: 조건부 렌더링</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`성인 인증` 버튼을 클릭하면 나이를 입력받은 후, </div>
        <div>20살 이상이라면 "성인입니다"를 조건부 렌더링하시오.</div>

        <div className="title">답</div>
        <div>
          <input type="text" onChange={(event) => handleInput(event.target.value)}></input>
        </div>
        <div className="link-button" onClick={() => checkIsAdult()}>
          성인 인증
        </div>
        <h1>{isAdult ? "성인입니다" : "성인이 아닙니다"}</h1>
      </div>
    </div>
  );
}

export default Index0206;
