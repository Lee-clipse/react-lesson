import React, { useState } from "react";

function Index0207() {
  // TODO

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 6: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>input 태그에 `onChange` 이벤트를 등록하여,</div>
        <div>아이디, 비밀번호로 로그인을 수행할 수 있도록 구현하시오.</div>
        <div>로그인을 성공한다면, "환영합니다"를 h1 태그에 조건부 렌더링하시오.</div>
        <div>- 힌트: event.target.value</div>

        <div className="title">답</div>
        <div>아이디</div>
        <input type="text" placeholder="아이디" />
        <div>비밀번호</div>
        <input type="text" placeholder="비밀번호" />
        <div className="link-button">로그인</div>

        {/* TODO */}
        <h1>{}</h1>
      </div>
    </div>
  );
}

export default Index0207;
