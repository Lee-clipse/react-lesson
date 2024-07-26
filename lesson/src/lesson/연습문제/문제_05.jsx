import React from "react";

function Index0005() {
  const database = [
    { name: "Kim", amountLog: [100, 50, 100, 100] },
    { name: "Han", amountLog: [300, 50, 100, 200] },
    { name: "Woo", amountLog: [50, 50, 800, 100] },
    { name: "Park", amountLog: [100, 200, 300, 300] },
    { name: "Lee", amountLog: [50, 50, 100, 200] },
  ];

  // TODO
  // 문제_04에서 함수를 분리시켜 구현하는 것이 의도
  // 하나의 함수는 하나의 의미를 가진다는 게 힌트

  return (
    <div>
      <div id="lesson-title">문제 5: VIP 3</div>
      <div id="lesson-content">
        <div className="title">문제</div>
        <div>`VIP 찾기` 버튼을 클릭하면 VIP인 사용자의 `name`을 출력하시오.</div>
        <div>VIP의 조건은 이용 금액이 500$를 넘은 사용자이다.</div>
        <div>- 출력은 console.log()로 수행</div>

        <div className="title">답</div>
        <div className="link-button">VIP 찾기</div>
      </div>
    </div>
  );
}

export default Index0005;
