import React from "react";

function Index0001() {
  const cafeInput = prompt("찾고 싶은 카페 이름을 검색하시오.", "");

  const cafeList = ["스타벅스", "메가커피", "카페051", "투썸플레이스"];
  let searchResult = false;

  // TODO

  return (
    <div>
      <div id="lesson-title">문제 1: 우리 동네 카페 검색</div>
      <div id="lesson-content">
        <div className="title">문제</div>
        <div>`cafeInput`을 입력 받아서 해당 카페가 `cafeList`에 존재하는지 검사하시오.</div>
        <div>만약 `cafeList`에 존재한다면, `searchResult`를 true로 변경하고,</div>
        <div>그렇지 않다면, `searchResult`를 false로 변경하시오.</div>

        <div className="title">답</div>
        <div>searchResult: {searchResult ? "있습니다" : "없습니다"}</div>
      </div>
    </div>
  );
}

export default Index0001;
