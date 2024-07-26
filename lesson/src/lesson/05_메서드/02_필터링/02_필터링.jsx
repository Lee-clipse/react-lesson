import React from "react";

function Index0504() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const grade = [85, 90, 70, 65, 80];

  return (
    <div>
      <div id="lesson-title">메서드 - 필터링</div>
      <div id="lesson-content">
        <div className="title">필터링</div>
        <div>`배열`을 대상으로 "특정 조건을 만족하는" 요소만을 추출하기 위한 메서드</div>
        <div>map 메서드랑 사용 방법이 완전히 동일하나, 동작이 다름</div>
        <div>간단한 조건이 필요한 map 메서드를 줄이기 위한 수단</div>

        <div className="title">사용 1</div>
        <div>
          map 사용:{" "}
          {arr.map((num) => {
            if (num >= 5) {
              return num;
            }
          })}
        </div>
        <div>filter 사용: {arr.filter((num) => num >= 5)}</div>

        <div className="title">사용 2</div>
        <div>
          map 사용:{" "}
          {grade.map((num) => {
            if (num >= 80) {
              return num;
            }
          })}
        </div>
        <div>filter 사용: {grade.filter((num) => num >= 80)}</div>
      </div>
    </div>
  );
}

export default Index0504;
