import React, { useState } from "react";
import Box from "./Components/Box";
import NumberBox from "./Components/NumberBox";

function Index0301() {
  const boxNumberList = [1, 2, 3];

  return (
    <div>
      <div id="lesson-title">컴포넌트</div>
      <div id="lesson-content">
        <div className="title">이론</div>
        <a href="https://half-straw-a69.notion.site/03-4a01da0444a74d8fa321e7079f05f9df?pvs=4">
          이론 자료
        </a>

        <div className="title">생성</div>
        <div>대문자로 파일 이름 설정, 생성</div>
        <div>`rafce` 축약어를 통해 컴포넌트 기본 틀 생성</div>

        <div className="title">일반 컴포넌트 렌더링</div>
        <div>
          <Box />
          <Box />
          <Box />
        </div>

        <div className="title">props 컴포넌트 렌더링</div>
        <div>
          <NumberBox number={1} />
          <NumberBox number={2} />
          <NumberBox number={3} />
        </div>

        <div className="title">props 컴포넌트 응용</div>
        <div>
          {boxNumberList.map((number) => (
            <NumberBox number={number} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index0301;
