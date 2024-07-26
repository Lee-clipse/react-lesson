import React from "react";

function Index0301() {
  const fruits = ["apple", "banana", "grape"];
  const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
  const week = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div>
      <div id="lesson-title">반복문 - 문법</div>
      <div id="lesson-content">
        <div>데이터를 나열해서 저장하고 접근하기 위함</div>
        <div>`map` 키워드를 통해 "배열"을 대상으로 반복문 사용</div>
        <a href="https://half-straw-a69.notion.site/0X-63b7977b416f4c35bca36724b046c4ca?pvs=4">
          이론 자료
        </a>

        <div className="title">사용</div>
        <div>
          fruits:
          {fruits.map((fruit) => {
            return fruit;
          })}
        </div>
        <div>
          rainbow:
          {rainbow.map((color) => {
            return color + ", ";
          })}
        </div>
        <div>
          week :
          {week.map((day) => {
            return day + "요일 ";
          })}
        </div>

        <div className="title">html 태그와 사용</div>
        <div>
          {fruits.map((fruit) => {
            const message = <div>내가 좋아하는 과일: {fruit}</div>;
            return message;
          })}
        </div>
      </div>
    </div>
  );
}

export default Index0301;
