import React, { useState, useEffect } from "react";

function Index0907() {
  // 2
  const [userDB, setUserDB] = useState([{}]);

  // 3
  function register() {}

  // 4
  function addPoint() {}

  // 5
  function everyPointSum() {}

  return (
    <div>
      <div id="lesson-title">예제 6: 사용자 DB</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>1. userDB라는 이름의 자료구조가 있다.</div>
        <div>2. 각 사용자는 고유한 식별자 `pk`를 가진다.</div>
        <div>3. 각 사용자는 회원가입시 아이디, 비밀번호를 입력한다.</div>
        <div>4. 각 사용자에게 pk로 포인트를 지급할 수 있다.</div>
        <div>
          5. 각 사용자 좌측의 체크박스를 선택하여, 선택 사용자의 포인트를 합산하여 조회할 수 있다.
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Index0907;
