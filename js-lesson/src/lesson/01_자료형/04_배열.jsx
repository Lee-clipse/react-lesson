import React from "react";

function Index0104() {
  const fruits = ["apple", "banana", "grape"];

  return (
    <div>
      <div id="lesson-title">자료형 - 배열</div>
      <div id="lesson-content">
        <div>하나의 자료형의 데이터를 저장</div>
        <div>대괄호를 통해 생성</div>
        <div>0부터 시작하는 순차적인 index로 구성</div>

        <div className="title">호출</div>
        <div>1번째 요소: {fruits[0]}</div>
        <div>2번째 요소: {fruits[1]}</div>
        <div>3번째 요소: {fruits[2]}</div>
        <div>10번째 요소: {fruits[10]}</div>

        <div className="title">배열의 길이</div>
        <div>배열의 길이: {fruits.length}</div>

        <div className="title">추가</div>
        <div>push 함수로 요소 추가</div>
        <div>{fruits.push("lemon")}</div>
        <div>추가된 4번째 요소: {fruits[3]}</div>

        <div className="title">수정</div>
        <div>단순 삽입으로 요소 수정</div>
        <div>{(fruits[3] = "melon")}</div>
        <div>수정된 4번째 요소: {fruits[3]}</div>
      </div>
    </div>
  );
}

export default Index0104;
