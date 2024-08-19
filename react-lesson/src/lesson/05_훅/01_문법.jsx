import React, { useState, useEffect } from "react";

function Index0501() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("새로고침");
  }, []);

  useEffect(() => {
    console.log("버튼 클릭", count);
  }, [count]);

  return (
    <div>
      <div id="lesson-title">훅</div>
      <div id="lesson-content">
        <div className="title">개념</div>
        <a href="https://half-straw-a69.notion.site/04-65a306aba72e47e8b67dbb0af8af0be1?pvs=4">
          이론 자료
        </a>

        <div className="title">사용</div>
        <div className="link-button" onClick={() => setCount(count + 1)}>
          버튼
        </div>
        <div>카운트: {count}</div>

        <div className="title">실제 용도</div>
        <div>1. API 호출</div>
        <div>- 컴포넌트 렌더링에 필요한 초기 데이터를 서버로부터 불러오기</div>
        <div>2. props 전처리</div>
        <div>- 부모 컴포넌트가 전달하는 데이터를 받아서 전처리하기 위함</div>
      </div>
    </div>
  );
}

export default Index0501;
