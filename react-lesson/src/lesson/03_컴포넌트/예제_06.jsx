import React, { useState } from "react";
import LoginSuccess from "./Components/LoginSuccess";
import LoginFailed from "./Components/LoginFailed";

function Index0307() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState(false);

  function handleId(value) {
    setId(value);
  }

  function handlePwd(value) {
    setPwd(value);
  }

  function handleClick() {
    if (id === "okok" && pwd === "okok") {
      setUser(true);
    } else {
      setUser(false);
    }
  }

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
        <input
          type="text"
          placeholder="아이디"
          onChange={(event) => handleId(event.target.value)}
        />
        <div>비밀번호</div>
        <input
          type="text"
          placeholder="비밀번호"
          onChange={(event) => handlePwd(event.target.value)}
        />

        <div className="link-button" onClick={() => handleClick()}>
          로그인
        </div>

        {/* TODO */}
        <div>로그인 결과: {user ? <LoginSuccess /> : <LoginFailed />}</div>
      </div>
    </div>
  );
}

export default Index0307;
