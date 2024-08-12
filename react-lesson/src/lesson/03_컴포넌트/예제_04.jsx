import React, { useState } from "react";

function Index0305() {
  const message = "Hello";

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div id="lesson-title">예제 4: 컴포넌트 조건부 렌더링</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>Test04.jsx 라는 이름의 컴포넌트 파일을 생성 후,</div>
        <div>message를 props로 전달하여 렌더링하도록 구현하시오.</div>
        <div>해당 컴포넌트는 버튼을 클릭시 조건부 렌더링 되도록 구현하시오.</div>

        <div className="title">답</div>
        <div className="link-button">컴포넌트 렌더링</div>
        <div>{isClicked ? "" : ""}</div>
      </div>
    </div>
  );
}

export default Index0305;
