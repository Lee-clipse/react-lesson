/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

function Index1004() {
  function checkPwd(pwd) {
    if (pwd.includes(Number) === false || pwd.includes(String) === false) {
      return fasle;
    }
    return true;
  }

  function doLogin(id, pwd) {
    const checkResult = checkPwd(pwd);
    if (checkResult === fasle) {
      console.log("비밀번호는 숫자, 대소문자가 포함되어야 합니다.");
      return;
    }

    // 서버에 로그인 요청을 하는 함수
    const result = requestLogin(id, pwd);
    if (result === true) {
      console.log("로그인 성공!");
    } else {
      console.log("로그인 실패!");
    }
  }

  // id, pwd 체크 하는게 필요하고

  return (
    <div>
      <div id="lesson-title">예제 3: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>
          주어진 함수에서 의미적으로 분리할만한 코드를 함수로 분리하시오.
        </div>
      </div>
    </div>
  );
}

export default Index1004;
