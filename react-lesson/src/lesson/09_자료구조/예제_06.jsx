import React, { useState, useEffect } from "react";

function Index0907() {
  // 2
  const [userDB, setUserDB] = useState([]);
  const [pkNumber, setPkNumber] = useState("");
  const [point, setPoint] = useState(0);

  const [userData, setUserData] = useState({
    pk: 0,
    id: "",
    pwd: "",
    point: 0,
  });

  // 3
  function register(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  function joinUs() {
    const newUserData = {
      ...userData,
      pk: "WH00" + userDB.length,
    };
    setUserDB([...userDB, newUserData]);
    setUserData({
      pk: 0,
      id: "",
      pwd: "",
      point: 0,
    });
  }

  // 4
  function addPoint() {
    userDB.map((user) => {
      if (user.pk === pkNumber) {
        user.point = Number(user.point) + Number(point);
      }
      return;
    });
    setPoint(0);
    setPkNumber("");
  }

  // 5
  function everyPointSum() {}

  return (
    <div>
      <div id="lesson-title">예제 6: 사용자 DB</div>

      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="input-group mb-3">
            <span className="input-group-text">ID</span>
            <input
              type="text"
              className="form-control"
              name="id"
              value={userData.id}
              onChange={(event) => register(event)}
            ></input>
            <span className="input-group-text">PWD</span>
            <input
              type="text"
              className="form-control"
              name="pwd"
              value={userData.pwd}
              onChange={(event) => register(event)}
            ></input>
            <button className="btn btn-success" onClick={() => joinUs()}>
              회원가입
            </button>
          </div>
          <hr></hr>
          <h5>User List</h5>
          <div className="input-group">
            <input
              type="text"
              value={pkNumber}
              placeholder="PK Number 입력"
              onChange={(event) => setPkNumber(event.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Point 입력"
              value={point}
              onChange={(event) => setPoint(event.target.value)}
            ></input>
            <button className="btn btn-success" onClick={() => addPoint()}>
              지급
            </button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th>PK</th>
                <th>ID</th>
                <th>POINT</th>
              </tr>
            </thead>
            <tbody>
              {userDB.map((user) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>{user.pk}</td>
                    <td>{user.id}</td>
                    <td>{user.point}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}

export default Index0907;
