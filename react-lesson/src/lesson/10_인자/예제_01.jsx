import React, { useState, useEffect } from "react";

function Index1002() {
  function 결제모듈(계산서) {
    alert(`${계산서}: 카드 결제 처리`);
  }

  function 주방(주문서) {
    alert(`${주문서}: 요리 시작`);
  }

  function 주문하기(주문) {
    결제모듈(주문);
    주방(주문);
  }

  return (
    <div>
      <div id="lesson-title">예제 1: 식당 주문</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div className="link-button" onClick={() => 주문하기("밀면 1개")}>
          주문하기
        </div>
      </div>
    </div>
  );
}

export default Index1002;
