import React from "react";

function Index0103() {
  const user = {
    name: "Kim",
    age: 20,
  };

  return (
    <div>
      <div id="lesson-title">자료형 - 객체</div>
      <div id="lesson-content">
        <div>다양한 자료형의 데이터를 저장</div>
        <div>중괄호를 통해 생성</div>
        <div>Key : Value 관계로 구성</div>

        <div className="title">호출</div>
        <div>key로 value를 호출</div>
        <div>user.name: {user.name}</div>
        <div>user.age: {user.age}</div>

        <div className="title">추가</div>
        <div>생성을 원하는 key로 value를 입력</div>
        <div>user.email = "kim@naver.com"</div>

        <div className="title">수정</div>
        <div>수정을 원하는 key로 value를 수정</div>
        <div>user.age = 30</div>
      </div>
    </div>
  );
}

export default Index0103;
