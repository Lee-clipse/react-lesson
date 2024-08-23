import React, { useState } from "react";

const Main = () => {
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">K_ollabo</span>
          </a>
        </div>

        <nav className="header-nav ms-auto me-3">
          <a href="/0001">Login</a>
        </nav>
      </header>
      <div id="mainsection">
        <div className="bg-danger p-5 text-white fw-bold">
          이래저래 소개글들
        </div>
        <div className="bg-dark p-5 text-white fw-bold">이래저래 소개글들</div>
        <div className="bg-success p-5 text-white fw-bold">
          이래저래 소개글들
        </div>
      </div>
    </div>
  );
};

export default Main;
