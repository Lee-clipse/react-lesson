import React from "react";

function Index0303() {
  const nameList = [];

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 2: 인사</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>"Kim", "Han", "Song" 에게 "Hello, 이름" 이라고 인사하도록</div>
        <div>배열을 생성하고, 반복문을 사용해 코드를 작성하시오.</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>{}</div>
      </div>
    </div>
  );
}

export default Index0303;

/*
  const nameList = ["Kim", "Han", "Song"];

  nameList.map((name) => {
    const message = "Hello, " + name;
    return <div>{message}</div>;
  })
*/
