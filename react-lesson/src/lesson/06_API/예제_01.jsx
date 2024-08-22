import React, { useState } from "react";
import { requestUserLogin } from "./Server";

function Index0602() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginResult, setLoginResult] = useState(false);

  // TODO
  function handleLogin() {}

  return (
    <div>
      <div id="lesson-title">예제 1: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>id, pwd 입력 후 로그인 버튼을 누르면 API를 전송하여,</div>
        <div>로그인 결과를 렌더링하시오.</div>

        <div className="title">답</div>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          type="text"
          placeholder="비밀번호"
          value={pwd}
          onChange={(event) => setPwd(event.target.value)}
        />
        <div className="link-button" onClick={() => handleLogin()}>
          로그인
        </div>
        <div>로그인 결과: {loginResult ? "로그인 성공!" : "로그인 실패"}</div>
      </div>
    </div>
  );
}

export default Index0602;
