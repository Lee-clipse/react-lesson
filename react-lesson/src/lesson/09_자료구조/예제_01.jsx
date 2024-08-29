import React, { useState, useEffect } from "react";

function Index0902() {
  // 2
  const [imageDB, setImageDB] = useState([{}]);

  // 3
  function handleImageSave() {}

  // 4
  function getTotalSize() {}

  return (
    <div>
      <div id="lesson-title">예제 1: 이미지 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. imageDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 image는 이름, 가로, 세로, 용량을 가진다.</div>
        <div>3. 이름, 가로, 세로, 용량을 입력 후 `저장` 버튼을 누르면 imageDB에 저장된다.</div>
        <div>4. imageDB의 총 보관 용량을 조회할 수 있다.</div>
      </div>

      <div></div>
    </div>
  );
}

export default Index0902;
