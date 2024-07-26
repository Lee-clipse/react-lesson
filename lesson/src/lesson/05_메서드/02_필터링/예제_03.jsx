import React from "react";

function Index0505() {
  const database = [
    { name: "Kim", age: 22 },
    { name: "Han", age: 19 },
    { name: "Woo", age: 23 },
    { name: "Lee", age: 20 },
    { name: "Park", age: 17 },
  ];
  // TODO
  function getAdultUser() {
    database.map((user) => {
      if (user.age >= 20) {
        console.log(user);
      }
    });
  }

  return (
    <div>
      <div id="lesson-title">정렬 - 필터링 1: map을 filter로</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>map 메서드로 구현한 코드를 filter 메서드로 고치시오.</div>

        <div className="title">답</div>
        <div>console에서 확인</div>
        <div>{getAdultUser()}</div>
      </div>
    </div>
  );
}

export default Index0505;
