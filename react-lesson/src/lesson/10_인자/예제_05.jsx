/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

function Index1006() {
  function doLogin(email, pwd) {
    if (email.includes("@") === false) {
      console.log("이메일이 유효하지 않습니다.");
      return;
    }

    // 서버에 로그인 요청을 하는 함수
    const result = requestLogin(email, pwd);
    if (result === true) {
      console.log("로그인 성공!");
    } else {
      console.log("로그인 실패!");
    }
  }

  function doRegister(email, pwd, rePwd, nickname) {
    if (email.includes("@") === false) {
      console.log("이메일이 유효하지 않습니다.");
      return;
    }

    if (pwd !== rePwd) {
      console.log("비밀번호가 입력한 것과 다릅니다.");
      return;
    }

    // 서버에 회원가입 요청을 하는 함수
    const result = requestRegister(email, pwd, nickname);
    if (result === true) {
      console.log("회원가입 성공!");
    } else {
      console.log("회원가입 실패!");
    }
  }

  return (
    <div>
      <div id="lesson-title">예제 5: 로그인, 회원가입</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>주어진 함수에서 의미적으로 분리할만한 코드를 함수로 분리하시오.</div>
      </div>
    </div>
  );
}

export default Index1006;
