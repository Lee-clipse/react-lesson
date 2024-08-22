import React, { useState } from "react";
import { requestProductEnter } from "./Server";

function Index0603() {
  const [rpNumber, setRpNumber] = useState("");
  const [zone, setZone] = useState("");

  // TODO
  function handleProductEnter() {}

  return (
    <div>
      <div id="lesson-title">예제 2: 입고 등록</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>RP Number, Zone 입력 후 입고 등록 버튼을 누르면 API를 전송하여,</div>
        <div>입고 등록 결과를 console.log()로 출력하시오.</div>

        <div className="lesson-title">답</div>
        <input
          type="text"
          placeholder="RP Number"
          value={rpNumber}
          onChange={(event) => setRpNumber(event.target.value)}
        />
        <input
          type="text"
          placeholder="Zone"
          value={zone}
          onChange={(event) => setZone(event.target.value)}
        />
        <div className="link-button" onClick={() => handleProductEnter()}>
          입고 등록
        </div>
      </div>
    </div>
  );
}

export default Index0603;
