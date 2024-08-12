import React from "react";
import styled from "styled-components";

function Index0401() {
  return (
    <div>
      <div id="lesson-title">스타일</div>
      <div id="lesson-content">
        <div className="title">용도</div>
        <div>React 내의 html 태그들에게 css를 적용하는 라이브러리로,</div>
        <div>`styled` 라이브러리를 대부분 사용한다.</div>
        <div>사용 문법은 css와 동일하다.</div>

        <div className="title">설치</div>
        <div>npm i styled-components</div>
        <div>자매품: npm i bootstrap</div>

        <div className="title">사용 1</div>
        <OrangeBox>오렌지색 박스</OrangeBox>

        <div className="title">사용 2</div>
        <GreenBox>
          <div id="g-title">초록색 박스</div>
          <div className="g-content">내용물</div>
        </GreenBox>

        <div className="title">사용 3</div>
        <PurpleBox>
          <div>보라색 박스</div>
        </PurpleBox>
      </div>
    </div>
  );
}

const OrangeBox = styled.div`
  background-color: orange;
  color: black;
`;

const GreenBox = styled.div`
  background-color: green;

  #g-title {
    color: black;
    font-size: 40px;
  }

  .g-content {
    color: red;
  }
`;

const PurpleBox = styled.div`
  background-color: purple;
  color: black;

  &:hover {
    background-color: black;
  }
`;

export default Index0401;
