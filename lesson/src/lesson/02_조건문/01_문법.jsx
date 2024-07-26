import React from "react";

function Index0201() {
  const num = prompt("숫자를 입력하세요", "0");
  let message = "";
  if (num > 0) {
    message = "양수입니다!";
  } else if (num < 0) {
    message = "음수입니다!";
  } else {
    message = "0입니다!";
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 문법</div>
      <div id="lesson-content">
        <div>조건에 따라 다른 행동을 취하기 위함</div>
        <div>
          <a href="https://half-straw-a69.notion.site/04-Control-Structure-26207910c56f49259d0754863797ce67?pvs=4">
            이론 자료
          </a>
        </div>

        <div className="title">사용</div>
        <div>
          당신이 입력한 숫자 {num}: {message}
        </div>
      </div>
    </div>
  );
}

export default Index0201;
