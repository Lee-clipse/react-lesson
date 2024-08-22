import React, { useState, useEffect } from "react";
import { requestNowTime } from "./Server";

function Index0601() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("페이지를 새로고침할때 API를 요청!");
    fetchNowTime();
  }, []);

  function fetchNowTime() {
    const result = requestNowTime();
    setData(result.data);
    return;
  }

  return (
    <div>
      <div id="lesson-title">API</div>
      <div id="lesson-content">
        <div className="title">개념</div>
        <a href="https://half-straw-a69.notion.site/06-API-d03c276c9f9c4f0c85e39081c348212e?pvs=4">
          이론 자료
        </a>

        <div className="title">사용</div>
        <div>API 요청에 대한 응답: {data?.time}</div>

        <div className="link-button" onClick={() => fetchNowTime()}>
          버튼 클릭
        </div>
      </div>
    </div>
  );
}

export default Index0601;
