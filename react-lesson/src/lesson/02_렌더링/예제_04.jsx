import React, { useState } from "react";

function Index0205() {
  const [lotto, setLotto] = useState([]);

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 4: 자동 로또</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`뽑기` 버튼을 클릭하면 `lotto` 배열에 랜덤 수가 추가되어,</div>
        <div>이를 렌더링하도록 구현하시오.</div>
        <div>앞서 배운 구조 분해 할당을 응용하시오.</div>
        <div>- 힌트: `Math.floor(Math.random() * 45) + 1` 는 1부터 45까지의 랜덤 수 생성 코드</div>

        <div className="title">답</div>
        <div>자동 로또: {lotto.map((num) => `${num}, `)}</div>
        <div className="link-button">뽑기</div>
      </div>
    </div>
  );
}

export default Index0205;
