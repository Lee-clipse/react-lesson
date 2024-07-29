import React, { useState } from "react";

function Index0104() {
  return (
    <div>
      <div id="lesson-title">조건문 - 예제 3: 손님 카운팅</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>현재 가게의 손님 수를 카운팅하려고 한다.</div>
        <div>`customer`라는 상태 변수를 선언하고,</div>
        <div>손님_입장(), 손님_퇴장() 함수를 완성시키시오.</div>

        <div>단, 손님은 늘 1명 단위로 입장, 퇴장하며,</div>
        <div>현 시점에 가게 손님 수는 20명이다.</div>

        <div className="title">답</div>
        <div>현재 가게에 손님: {}</div>
        <div className="link-button">손님 입장</div>
        <div className="link-button">손님 퇴장</div>
      </div>
    </div>
  );
}

export default Index0104;
