import React, { useEffect, useState } from "react";

const 서버_데이터 = new Date().toLocaleString("ko-KR");

function Index0503() {
  const [data, setData] = useState("");

  // TODO

  return (
    <div>
      <div id="lesson-title">예제 2: API 호출</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>새로고침 할 때마다 `서버_데이터`를 상태 변수에 저장하여</div>
        <div>아래에 렌더링하도록 구현하시오.</div>

        <div className="title">답</div>
        <div>{data}</div>
      </div>
    </div>
  );
}

export default Index0503;
