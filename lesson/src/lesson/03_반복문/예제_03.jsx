import React from "react";

function Index0304() {
  const gradeList = [75, 80, 100, 90, 80];
  let gradeSum = 0;

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 3: 점수 합</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`gradeList`의 각 점수의 전체 합을 구하시오.</div>
        <div>- 힌트: 반복문을 사용하여, 각 점수를 더하기 연산</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>{}</div>
        <div>점수 합: {}</div>
      </div>
    </div>
  );
}

export default Index0304;

/*
  gradeList.map((grade) => {
    gradeSum = gradeSum + grade;
  })

  gradeSum
*/
