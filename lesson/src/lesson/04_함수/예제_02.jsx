import React from "react";

function Index0404() {
  function congratulation() {
    alert("축하합니다!");
  }

  return (
    <div>
      <div id="lesson-title">함수 - 예제 2: 축하받기</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>
          `축하받기` 버튼을 누르면 `congratulation()` 함수를 실행하도록 이벤트를 작성하시오.
        </div>

        <div className="title">답</div>
        {/* TODO */}
        <div className="link-button" onClick={() => {}}>
          축하받기
        </div>
      </div>
    </div>
  );
}

export default Index0404;
