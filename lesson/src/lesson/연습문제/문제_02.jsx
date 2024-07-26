import React from "react";

function Index0002() {
  const id = prompt("아이디를 입력하시오.", "");
  const pwd = prompt("비밀번호를 입력하시오.", "");

  const database = [
    { name: "Kim", age: 20, id: "kimkim", pwd: "kim20" },
    { name: "Han", age: 22, id: "hanhan", pwd: "han22" },
    { name: "Son", age: 31, id: "sonson", pwd: "son31" },
  ];
  let message = "로그인 실패";

  // TODO

  return (
    <div>
      <div id="lesson-title">문제 2: 로그인</div>
      <div id="lesson-content">
        <div className="title">문제</div>
        <div>`id`, `pwd`를 입력 받아서 해당 사용자를 환영하는 `message`를 작성하시오.</div>
        <div>만약 `database`에 존재하는 사용자라면, "안녕하세요, OO세 OOO님!"을 출력하고,</div>
        <div>그렇지 않다면, "로그인 실패"를 출력하시오.</div>

        <div>- 힌트: 02_조건문 / 예제_04.jsx 코드의 로그인</div>
        <div>- 힌트: 03_반복문 / 예제_05.jsx 코드의 사용자 환영 메시지 출력</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>{message}</div>
      </div>
    </div>
  );
}

export default Index0002;
