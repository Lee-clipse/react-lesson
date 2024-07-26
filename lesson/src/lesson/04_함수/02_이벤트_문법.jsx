import React from "react";

function Index0402() {
  // 이벤트 사용
  function alertHello() {
    alert("Hello");
  }

  function alertInputText(event) {
    alert(event.target.value);
  }

  return (
    <div>
      <div id="lesson-title">함수 - 이벤트 문법</div>
      <div id="lesson-content">
        <div className="title">이벤트</div>
        <div>웹 페이지에서 사용자가 특정 동작을 수행했을 때,</div>
        <div>특정 JavaScript 코드를 실행하는 것</div>
        <a href="https://half-straw-a69.notion.site/07-656db73e3db44707a9436d24570f97bb?pvs=4">
          이론 자료
        </a>

        <div className="title">1. onClick 이벤트</div>
        <div>정의: 사용자가 클릭하면 이벤트를 발동</div>
        <div onClick={() => alertHello()} className="link-button">
          인사하기
        </div>

        <div className="title">2. onChange 이벤트</div>
        <div>
          input 태그 대상으로, 사용자의 키보드 입력에 따라 onChange 이벤트로 지정한 함수를 실행
        </div>
        <input
          type="text"
          name="text"
          placeholder="아무거나 입력"
          onChange={(event) => alertInputText(event)}
        />
      </div>
    </div>
  );
}

export default Index0402;
