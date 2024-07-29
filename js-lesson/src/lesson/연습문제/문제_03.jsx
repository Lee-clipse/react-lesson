import React from "react";

function Index0003() {
  const database = [
    { name: "Kim", amount: 400 },
    { name: "Han", amount: 1050 },
    { name: "Woo", amount: 350 },
    { name: "Park", amount: 900 },
    { name: "Lee", amount: 650 },
  ];

  // TODO

  return (
    <div>
      <div id="lesson-title">문제 3: VIP</div>
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

export default Index0003;
