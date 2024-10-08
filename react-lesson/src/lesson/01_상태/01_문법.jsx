import React, { useState } from "react";

function Index0101() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <div id="lesson-title">상태</div>
      <div id="lesson-content">
        <div className="title">상태 변경</div>
        <div>`count` 라는 상태 변수에 직접 접근하지 않고,</div>
        <div>`setCount` 라는 상태 변경 함수를 통해 값을 변경</div>
        <a href="https://half-straw-a69.notion.site/01-b45842fd72564e3894e880b86f9afb52?pvs=4">
          이론 자료
        </a>

        <div className="title">예시</div>
        <div>count: {count}</div>
        <button onClick={() => increment()}>count 증가</button>
      </div>
    </div>
  );
}

export default Index0101;
