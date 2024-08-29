import React, { useState, useEffect } from "react";

function Index0903() {
  const [scoreDB, setScoreDB] = useState([{}]);

  // 2
  // API를 요청하듯, 새로고침시 `requestScoreData()` 함수 호출 후 데이터 저장

  // 3
  function getScoreAvg() {}

  // 4
  function getGoodScores() {}

  return (
    <div>
      <div id="lesson-title">예제 2: 학생 성적 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. scoreDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 score는 학생의 이름, 100점 만점 점수로 이루어져 있다.</div>
        <div>3. 전체 학생 성적의 평균을 조회할 수 있다.</div>
        <div>4. 85점이 넘는 학생의 이름들을 조회할 수 있다.</div>
      </div>

      <div></div>
    </div>
  );
}

function requestScoreData() {
  return [
    {
      name: "Lee",
      score: 85,
    },
    {
      name: "Kim",
      score: 55,
    },
    {
      name: "Han",
      score: 90,
    },
    {
      name: "Song",
      score: 75,
    },
    {
      name: "Na",
      score: 100,
    },
    {
      name: "Park",
      score: 75,
    },
    {
      name: "Jang",
      score: 80,
    },
  ];
}

export default Index0903;
