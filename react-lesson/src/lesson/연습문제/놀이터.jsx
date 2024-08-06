import React, { useState } from "react";

function Index1009() {
  // TODO
  const userdata = [
    {
      name: "김호황",
      spacecode: "wh001a",
      products: [1001, 1002, 1003],
      id: "okok",
      pwd: "okok",
    },
    {
      name: "손주경",
      spacecode: "wh002a",
      products: [2001, 2002, 2003],
      id: "koko",
      pwd: "koko",
    },
  ];

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [usercheck, setUserCheck] = useState();

  function handelId(inputId) {
    setId(inputId);
    console.log(id);
  }

  function handlePwd(inputPwd) {
    setPwd(inputPwd);
    console.log(pwd);
  }

  function isLogin() {
    userdata.map((user) => {
      if (id === user.id && pwd === user.pwd) {
        setUserCheck(<div>안녕하세요 {user.name} 님</div>);
      }
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-center p-3">
        <div className="card row">
          <div className="card-header text-center col-12">
            <h3>Ontact Korea</h3>
            <div className="text-end">
              <p className="p-0 m-0 small">1번 Id: okok Pwd: okok</p>
              <p className="p-0 m-0 small">2번 Id: koko Pwd: koko</p>
            </div>
          </div>
          <div className="card-body pt-3 col-12">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="ID"
                onChange={(event) => handelId(event.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={(event) => handlePwd(event.target.value)}
              ></input>
            </div>
            <div className="d-flex justify-content-center pt-3">
              <button
                className="btn btn-outline-success col-12"
                onClick={() => isLogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">{usercheck}</div>
    </div>
  );
}

export default Index1009;
