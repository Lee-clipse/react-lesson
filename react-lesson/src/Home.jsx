import React, { useState } from "react";

function Home() {
  return (
    <div>
      <div id="lesson-title">React Lesson</div>
      <div id="lesson-content">
        <div className="title">01 상태</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0101">
              이동
            </a>
          </div>

          <div>
            [예제 01] 클릭 카운팅 1{" "}
            <a className="link-button" href="/0102">
              이동
            </a>
          </div>

          <div>
            [예제 02] 클릭 카운팅 2{" "}
            <a className="link-button" href="/0103">
              이동
            </a>
          </div>

          <div>
            [예제 03] 손님 카운팅{" "}
            <a className="link-button" href="/0104">
              이동
            </a>
          </div>

          <div>
            [예제 04] 탁구 심판{" "}
            <a className="link-button" href="/0105">
              이동
            </a>
          </div>

          <div>
            [예제 05] 댓글 남기기{" "}
            <a className="link-button" href="/0106">
              이동
            </a>
          </div>

          <div>
            [예제 06] 로그인{" "}
            <a className="link-button" href="/0107">
              이동
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
