import React, { useState } from "react";

function Index0306() {
  const [inputAge, setInputAge] = useState(0);

  const handleAgeInput = (value) => {};

  return (
    <div>
      <div id="lesson-title">예제 5: 나이 검사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>input 태그로 나이를 입력 받고,</div>
        <div>입력 받은 나이에 따라 컴포넌트를 조건부 렌더링하시오.</div>
        <div>`나이 검사` 버튼을 누르면 렌더링 되도록 구현하시오.</div>

        <div className="title">답</div>
        <input type="text" value={inputAge} />
        <div className="link-button">나이 검사</div>

        {/* TODO */}
        <div>{}</div>
      </div>
    </div>
  );
}

export default Index0306;
