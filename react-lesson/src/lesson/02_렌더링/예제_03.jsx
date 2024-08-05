import React, { useState } from "react";

function Index0204() {
  const [numberList, setNumberList] = useState([]);

  function addNumber() {
    const newNumber = 7;
    setNumberList([...numberList, newNumber]);
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 3: 구조 분해 할당</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>배열을 추가하는 동작은 `push()` 라는 메서드를 통해서 한다고 배웠다.</div>
        <div>하지만 배열이 변수가 아니라 상태라면 다른 방법을 사용한다.</div>
        <div>`...` 이라는 연산자를 통해 배열을 분해할 수 있으며,</div>
        <div>모두 분해된 배열에 새로운 요소를 추가함으로써</div>
        <div>상태로 선언된 배열을 재정의 할 수 있다. </div>

        <div className="title">답</div>
        <div>리스트: {numberList}</div>
        <div className="link-button" onClick={() => addNumber()}>
          숫자 추가
        </div>
      </div>
    </div>
  );
}

export default Index0204;
