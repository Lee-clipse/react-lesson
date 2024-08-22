import React, { useEffect, useState } from "react";
import { requestAddPoint, requestEveryUser } from "./Server";
import styled from "styled-components";

function Index0604() {
  const [userList, setUserList] = useState([]);
  const [point, setPoint] = useState("");

  // TODO

  return (
    <div>
      <div id="lesson-title">예제 3: 전체 사용자 포인트 지급</div>
      <div id="lesson-content">
        <div className="title">예제</div>
        <div>새로고침시 전체 사용자 목록을 렌더링하도록 API를 호출하시오.</div>
        <div>특정 사용자에게 포인트를 지급하면 API를 호출 후,</div>
        <div>API 응답 결과를 console.log()로 출력하시오.</div>

        <div className="lesson-title">답</div>
        <div>
          {userList?.map((user) => {
            return (
              <UserBox>
                <div>이름: {user.name}</div>
                <div>포인트: {user.point}</div>
                <div>결제: ${user.amount}</div>
                <input
                  type="text"
                  placeholder="포인트 입력"
                  onChange={(event) => setPoint(event.target.value)}
                />
                <div className="link-button">포인트 증정</div>
              </UserBox>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const UserBox = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid white;
`;

export default Index0604;
