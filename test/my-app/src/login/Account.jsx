import React, { useState } from "react";

const Account = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  function joinUs() {
    const userInfo = { id, pwd, name };
    // userList 배열을 localStorage에서 가져옴 (기존 유저리스트가 없으면 빈 배열로 초기화)
    const storedUserList = JSON.parse(localStorage.getItem("userList")) || [];
    
    // 새 회원 정보를 추가
    storedUserList.push(userInfo);

    // localStorage에 userList를 저장
    localStorage.setItem("userList", JSON.stringify(storedUserList));

    alert("회원가입이 완료 되었어요 !");
    window.location.href = "/0001";  // 로그인 페이지로 이동
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
                      <h5 className="fw-bold card-title">K_ollabo 회원가입</h5>
                    </a>
                    <div className="input-group mb-3">
                      <span className="input-group-text">ID</span>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => setId(event.target.value)}
                      ></input>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">PWD</span>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => setPwd(event.target.value)}
                      ></input>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Your name</span>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => setName(event.target.value)}
                      ></input>
                    </div>

                    <button
                      className="btn btn-outline-success col-12"
                      onClick={() => joinUs()}
                    >
                      JoinUs
                    </button>
                    <a href="/0001">Login</a>
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

export default Account;
