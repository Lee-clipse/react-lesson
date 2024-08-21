import React, { useState } from "react";

const Main = () => {
  return (
    <div>
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
          <a href="#" class="logo d-flex align-items-center">
            <span class="d-none d-lg-block">K_ollabo</span>
          </a>
        </div>

        <nav class="header-nav ms-auto me-3">
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
