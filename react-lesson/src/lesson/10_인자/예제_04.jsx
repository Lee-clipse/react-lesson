/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

function Index1005() {
  function checkMoney(통장, 비밀번호) {
    const 잔액 = 잔액_불러오기(통장, 비밀번호);
    if (잔액 <= 0) {
      return false;
    }
    return true;
  }

  function payment(통장, 비밀번호) {
    const checkResult = checkMoney(통장, 비밀번호);
    if (checkResult === fasle) {
      console.log("잔액이 부족합니다.");
      return;
    }

    // 서버에 결제 요청을 하는 함수
    const result = requestPayment(통장, 비밀번호);
    if (result === true) {
      console.log("결제 성공!");
    } else {
      console.log("결제 실패!");
    }
  }

  return (
    <div>
      <div id="lesson-title">예제 4: 결제</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>
          주어진 함수에서 의미적으로 분리할만한 코드를 함수로 분리하시오.
        </div>
      </div>
    </div>
  );
}

export default Index1005;
