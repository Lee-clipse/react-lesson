import React from "react";

function Index0506() {
  const database = [
    { name: "Kim", amount: 700 },
    { name: "Han", amount: 550 },
    { name: "Lee", amount: 600 },
    { name: "Woo", amount: 1000 },
    { name: "Park", amount: 500 },
  ];
  function getVipList() {
    let vipList = [];

    // TODO

    console.log(vipList);
  }

  return (
    <div>
      <div id="lesson-title">정렬 - 필터링 2: VIP 선정</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>사용 금액이 700$ 이상은 사용자를 VIP로 선정하여 출력하시오.</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>console에서 확인</div>
        <div>{getVipList()}</div>
      </div>
    </div>
  );
}

export default Index0506;
