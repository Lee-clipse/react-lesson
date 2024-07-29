import React from "react";

function Index0205() {
  const id = prompt("아이디를 입력하시오.", "");
  const pwd = prompt("비밀번호를 입력하시오.", "");
  let loginResult = false;
  // TODO

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 4: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`id`, `pwd`를 입력 받아서 로그인 결과를 출력하시오.</div>
        <div>로그인이 성공했다면, `loginResult`가 true가 되도록,</div>
        <div>그렇지 않다면, `loginResult`가 false가 되도록 조건문을 작성하시오, </div>
        <div>- 유효한 id: okid, 유효한 pwd: okpwd</div>

        <div className="title">답</div>
        <div>loginResult: {loginResult ? "로그인 성공!" : "로그인 실패"}</div>
      </div>
    </div>
  );
}

export default Index0205;

/*
  if (id === "okid" && pwd === "okpwd") {
    loginResult = true;
  }
*/
