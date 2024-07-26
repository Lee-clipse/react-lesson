import React from "react";

function Index0004() {
  const database = [
    { name: "Kim", amountLog: [100, 50, 100, 100] },
    { name: "Han", amountLog: [300, 50, 100, 200] },
    { name: "Woo", amountLog: [50, 50, 800, 100] },
    { name: "Park", amountLog: [100, 200, 300, 300] },
    { name: "Lee", amountLog: [50, 50, 100, 200] },
  ];

  // TODO
  // amountLog 배열은 이용 금액 기록이므로,
  // 총 이용 금액을 계산하여 500$이 넘는지 검사

  return (
    <div>
      <div id="lesson-title">문제 4: VIP 2</div>
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

export default Index0004;
