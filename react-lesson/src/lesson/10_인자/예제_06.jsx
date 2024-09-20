import React, { useState, useEffect } from "react";
import UserModal from "./Components/UserModal";

function Index1007() {
  const userList = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Han" },
    { id: 3, name: "Song" },
  ];

  const [selectedUser, setSelectedUser] = useState({});
  const [userModal, setUserModal] = useState(false);

  function selectUser(user) {
    setSelectedUser(user);
    setUserModal(true);
  }

  return (
    <>
      {userModal && <UserModal user={selectedUser} closeModal={() => setUserModal(false)} />}

      <div>
        <div id="lesson-title">예제 6: 사용자 모달</div>
        <div id="lesson-content">
          <div className="title">예제</div>
          <div>1. 사용자를 클릭하면 해당 사용자의 정보를 조회하는 모달이 등장한다.</div>
        </div>

        <div id="lesson-content">
          {userList.map((user) => {
            return (
              <div className="link-button" onClick={() => selectUser(user)}>
                {user.id}번 사용자
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Index1007;
