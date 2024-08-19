import React, { useState } from "react";
import NumberBox from "./Components/NumberBox";

function Index0504() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div id="lesson-title">예제 3: props 박스</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>아래 input에 숫자를 입력하면</div>
        <div>박스의 번호가 변경되도록 컴포넌트를 구현하시오.</div>
        <div>박스 컴포넌트에게 props로 데이터를 전달하시오.</div>
        <div>박스 컴포넌트는 useEffect로 데이터를 렌더링하도록 구현하시오.</div>

        <input type="text" />
        <div className="title">답</div>
      </div>
    </div>
  );
}

export default Index0504;
