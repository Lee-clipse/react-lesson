import React from "react";

function Index0307() {
  return (
    <div>
      <div id="lesson-title">예제 6: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>id, pwd를 입력 받아 로그인 성공시 LoginSuccess 컴포넌트를,</div>
        <div>로그인 실패시 LoginFailed 컴포넌트를 렌더링하도록 구현하시오.</div>
        <div>id: "okok", pwd: "okok"</div>
        <div>- 힌트: onChange, useState</div>

        <div className="title">답</div>
        <div>아이디</div>
        <input type="text" placeholder="아이디" />
        <div>비밀번호</div>
        <input type="text" placeholder="비밀번호" />
        <div className="link-button"></div>

        <div className="link-button">로그인</div>

        {/* TODO */}
        <div>로그인 결과: </div>
      </div>
    </div>
  );
}

export default Index0307;
