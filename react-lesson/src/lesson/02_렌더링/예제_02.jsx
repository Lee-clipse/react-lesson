import React from "react";

function Index0203() {
  return (
    <div>
      <div id="lesson-title">조건문 - 예제 2: 현재 시간 리렌더링</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>`현재 시간 출력` 버튼을 눌렀을 때,</div>
        <div>`now` 변수를 `useState` 함수를 통해 정의하고,</div>
        <div>상태 변수를 변경하는 함수를 사용하시오.</div>
        <div>- 힌트: `new Date().toLocaleString("ko-KR")` 를 사용하면 현재 한국 시간 출력</div>

        <div className="title">답</div>
        {/* TODO */}
        <div>현재 시간: {}</div>
        <div className="link-button">현재 시간 출력</div>
      </div>
    </div>
  );
}

export default Index0203;
