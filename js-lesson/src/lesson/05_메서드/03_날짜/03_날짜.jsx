import React from "react";

function Index0507() {
  const cur = new Date();
  console.log("현재 시각: ", cur);

  return (
    <div>
      <div id="lesson-title">메서드 - 날짜</div>
      <div id="lesson-content">
        <div className="title">정의</div>
        <div>js에서 날짜 데이터 (연, 월, 일, 시, 분, 초)를 다루기 위한 객체</div>
        <div>수십가지의 메서드가 있으나 절대 다 외우고 사용하지 않음</div>
        <div>- 현재 시 구하기, 현재 한국 연월일 구하기 등</div>

        <div>사용</div>
        <div>원하는 기능에 대해 Chat-GPT 사용 권장</div>
        <div>현 시점의 시각: {}</div>
      </div>
    </div>
  );
}

export default Index0507;
