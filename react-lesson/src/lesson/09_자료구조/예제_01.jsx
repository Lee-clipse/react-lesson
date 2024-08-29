import React, { useState, useEffect } from "react";

function Index0902() {
  const [userData, setUserData] = useState([{}]);

  // 3번
  function register() {
    // 총 결제 금액은 초기값 0
    // 가입 날짜는 현재 시점
  }

  // 4번
  function payment() {}

  // 5번
  function everyPaymentSum() {}

  // 6번
  function registerSort() {}

  return (
    <div>
      <div id="lesson-title">예제 1: 사용자 데이터</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. userData라는 이름의 자료구조가 있다.</div>
        <div>2. 각 사용자는 고유한 식별자 `pk`를 가진다.</div>
        <div>3. 각 사용자는 회원가입시 아이디, 비밀번호를 입력한다.</div>
        <div>4. 각 사용자는 결제를 수행할 수 있으며, 총 결제 금액이 누적되어 저장된다.</div>
        <div>5. 모든 전체 결제 금액을 합산하여 조회할 수 있다.</div>
        <div>6. 각 사용자는 회원가입 날짜 순으로 정렬될 수 있다. (chatGPT)</div>
      </div>

      <div></div>
    </div>
  );
}

export default Index0902;
