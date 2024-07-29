import React, { useState } from "react";

function Index0102() {
  const [click, setClick] = useState(0);

  function plusClick() {
    // TODO
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 1: 클릭 카운팅 1</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`클릭하기` 버튼을 눌렀을 때 클릭 횟수가 증가하도록,</div>
        <div>상태 변수를 변경하는 함수를 사용하시오.</div>

        <div className="title">답</div>
        <div>클릭 횟수: {click}</div>

        {/* TODO */}
        <div className="link-button">클릭하기</div>
      </div>
    </div>
  );
}

export default Index0102;
