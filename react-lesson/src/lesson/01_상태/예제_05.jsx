import React, { useState } from "react";

function Index0106() {
  const [comment, setComment] = useState();

  function typeComment(input) {
    setComment(input);
  }

  return (
    <div>
      <div id="lesson-title">조건문 - 예제 5: 실시간 댓글</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>input 태그에 `onChange` 이벤트를 등록하여,</div>
        <div>댓글을 입력할 수 있도록 구현하시오.</div>
        <div>- 힌트: event.target.value</div>

        <div className="title">답</div>
        <div>댓글: {comment}</div>
        <input type="text" onChange={(event) => typeComment(event.target.value)} />
      </div>
    </div>
  );
}

export default Index0106;
