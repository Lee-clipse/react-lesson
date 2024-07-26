import React from "react";

function Index0102() {
  const lastName = "Song";
  const firstName = "Hae";
  return (
    <div>
      <div id="lesson-title">자료형 - 문자</div>
      <div id="lesson-content">
        <div className="title">표현</div>
        <div>My name is {lastName}.</div>

        <div className="title">더하기</div>
        <div>My name is {lastName + firstName}.</div>
      </div>
    </div>
  );
}

export default Index0102;
