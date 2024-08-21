import React, { useState } from "react";

const Account = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">회원가입</h5>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Id
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                            required
                            onChange={(event) => setId(event.target.value)}
                          ></input>
                          <div class="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="yourPassword"
                          required
                          onChange={(event) => setPwd(event.target.value)}
                        ></input>
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourName" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="yourName"
                          required
                          onChange={(event) => setName(event.target.value)}
                        ></input>
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">
                          Join Us
                        </button>
                      </div>
                    </form>
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
