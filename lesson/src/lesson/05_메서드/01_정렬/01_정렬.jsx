import React from "react";

function Index0501() {
  const arr1 = [4, 1, 3, 2, 5];
  const arr2 = [4, 1, 3, 2, 5];

  return (
    <div>
      <div id="lesson-title">메서드 - 정렬</div>
      <div id="lesson-content">
        <div className="title">정렬</div>
        <div>`배열`을 정렬하기 위해 사용하는 메서드</div>
        <div>- 오름차순 정렬: 1, 2, 3, 4, 5</div>
        <div>- 내림차순 정렬: 9, 8, 7, 6, 5</div>

        <div className="title">사용</div>
        <div>정렬을_원하는_배열.sort()</div>

        <div className="title">오름차순 정렬</div>
        <div>정렬 전: {arr1.map((num) => num + " ")}</div>
        <div>{arr1.sort((a, b) => a - b)}</div>
        <div>정렬 후: {arr1.map((num) => num + " ")}</div>

        <div className="title">내림차순 정렬</div>
        <div>정렬 전: {arr2.map((num) => num + " ")}</div>
        <div>{arr2.sort((a, b) => b - a)}</div>
        <div>정렬 후: {arr2.map((num) => num + " ")}</div>

        <div className="title">객체 배열</div>
        <div>객체로 이루어진 배열 대상으로 정렬하는 경우,</div>
        <div>객체의 특정 속성을 대상으로 정렬하면</div>
        <div>실제 객체 배열에 정렬이 일어남</div>
        <div>userDatabase이라는 객체 배열에서 사용 금액순으로 정렬</div>
      </div>
    </div>
  );
}

export default Index0501;
