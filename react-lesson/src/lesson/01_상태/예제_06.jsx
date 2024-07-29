import React, { useState } from "react";

function Index0107() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  function doLogin() {
    if (id === "okok" && pwd == "okok") {
      alert("로그인 성공!");
    } else {
      alert("로그인 실패");
    }
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 6: 로그인</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>input 태그에 `onChange` 이벤트를 등록하여,</div>
        <div>댓글을 입력할 수 있도록 구현하시오.</div>
        <div>- 힌트: event.target.value</div>

        <div className="title">답</div>
        <div>아이디</div>
        <input type="text" placeholder="아이디" />
        <div>비밀번호</div>
        <input type="text" placeholder="비밀번호" />
        <div className="link-button">로그인</div>
      </div>
    </div>
  );
}

export default Index0107;
