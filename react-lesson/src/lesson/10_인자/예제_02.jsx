import React, { useState, useEffect } from "react";

function Index1003() {
  function 버스비_결제(종류, 환승_여부) {
    // const 종류 = "어른";
    // const 환승_여부 = false;
    if (환승_여부 === true) {
      alert("환승입니다.");
      return;
    }

    alert(`${종류}입니다.`);
  }

  return (
    <div>
      <div id="lesson-title">예제 2: 버스 카드 결제</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div className="link-button" onClick={() => 버스비_결제("어른", false)}>
          버스 카드 찍기
        </div>
      </div>
    </div>
  );
}

export default Index1003;
