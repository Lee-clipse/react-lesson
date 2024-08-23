import React, { useState, useEffect } from "react";

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList")) || [];
    setUserList(storedUserList);
  }, []);

  function isLogin() {
    userList.map((user) => {
      if (id === user.id && pwd === user.pwd) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "/0003";
      }
    });
  }

  return (
    <div>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="d-flex  align-items-center justify-content-center">
                <div className="card">
                  <div className="card-body">
                    <a href="/">
                      <h5 className="fw-bold card-title">K_ollabo</h5>
                    </a>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="ID를 입력하세요"
                      onChange={(event) => setId(event.target.value)}
                    ></input>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="PWD를 입력하세요"
                      onChange={(event) => setPwd(event.target.value)}
                    ></input>
                    <button
                      className="btn btn-outline-warning col-12"
                      onClick={() => isLogin()}
                    >
                      Login
                    </button>
                    <a href="/0002">회원가입</a>

                    {/* 저장된 유저리스트 출력 */}
                    <div className="mt-4">
                      <h6>Registered Users:</h6>
                      <ul>
                        {userList.map((user, index) => (
                          <li key={index}>
                            {user.name} (ID: {user.id})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
