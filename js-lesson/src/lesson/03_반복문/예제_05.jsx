import React from "react";

function Index0306() {
  const userList = [
    { name: "Kim", age: 20 },
    { name: "Han", age: 22 },
    { name: "Son", age: 31 },
  ];

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 5: 자기소개</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`userList`의 각 name, age를 출력하시오.</div>
        <div>- "이름: Kim, 나이: age" 형태로 반복하여 출력</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>{}</div>
      </div>
    </div>
  );
}

export default Index0306;

/*
  userList.map((user) => {
    return (
      <div>
        이름: {user.name}, 나이: {user.age}
      </div>
    );
  })
*/
