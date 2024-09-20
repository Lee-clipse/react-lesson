import React, { useState } from "react";

function Home() {
  return (
    <div>
      <div id="lesson-title">React Lesson</div>
      <div id="lesson-content">
        <div className="title">실습</div>
        <div>
          <div>
            <a className="link-button" href="/10001">
              01_장바구니
            </a>
          </div>

          <div>
            <a className="link-button" href="/10002">
              02_배송료_계산기
            </a>
          </div>

          <div>
            <a className="link-button" href="/10003">
              03_노트_앱
            </a>
          </div>
        </div>

        <div className="title">연습문제</div>
        <div>
          <a className="link-button" href="/0001">
            문제_01
          </a>
        </div>

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

        <div className="title">02 렌더링</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0201">
              이동
            </a>
          </div>

          <div>
            [예제 01] 렌더링 하기{" "}
            <a className="link-button" href="/0202">
              이동
            </a>
          </div>

          <div>
            [예제 02] 현재 시간 리렌더링{" "}
            <a className="link-button" href="/0203">
              이동
            </a>
          </div>

          <div>
            [예제 03] 구조 분해 할당{" "}
            <a className="link-button" href="/0204">
              이동
            </a>
          </div>

          <div>
            [예제 04] 자동 로또{" "}
            <a className="link-button" href="/0205">
              이동
            </a>
          </div>

          <div>
            [예제 05] 조건부 렌더링{" "}
            <a className="link-button" href="/0206">
              이동
            </a>
          </div>

          <div>
            [예제 06] 로그인{" "}
            <a className="link-button" href="/0207">
              이동
            </a>
          </div>
        </div>

        <div className="title">03 컴포넌트</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0301">
              이동
            </a>
          </div>

          <div>
            [예제 01] 컴포넌트 렌더링
            <a className="link-button" href="/0302">
              이동
            </a>
          </div>

          <div>
            [예제 02] 컴포넌트 props 1
            <a className="link-button" href="/0303">
              이동
            </a>
          </div>

          <div>
            [예제 03] 컴포넌트 props 2
            <a className="link-button" href="/0304">
              이동
            </a>
          </div>

          <div>
            [예제 04] 컴포넌트 조건부 렌더링
            <a className="link-button" href="/0305">
              이동
            </a>
          </div>

          <div>
            [예제 05] 나이 검사
            <a className="link-button" href="/0306">
              이동
            </a>
          </div>

          <div>
            [예제 06] 로그인
            <a className="link-button" href="/0307">
              이동
            </a>
          </div>
        </div>

        <div className="title">04 스타일</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0401">
              이동
            </a>
          </div>

          <div>
            [예제 01] styled 색 입히기
            <a className="link-button" href="/0402">
              이동
            </a>
          </div>

          <div>
            [예제 02] bootstrap 색 입히기
            <a className="link-button" href="/0403">
              이동
            </a>
          </div>
        </div>

        <div className="title">05 훅</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0501">
              이동
            </a>
          </div>

          <div>
            [예제 01] 새로고침{" "}
            <a className="link-button" href="/0502">
              이동
            </a>
          </div>

          <div>
            [예제 02] API 호출{" "}
            <a className="link-button" href="/0503">
              이동
            </a>
          </div>

          <div>
            [예제 03] props 호출{" "}
            <a className="link-button" href="/0504">
              이동
            </a>
          </div>
        </div>

        <div className="title">06 API</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0601">
              이동
            </a>
          </div>

          <div>
            [예제 01] 로그인{" "}
            <a className="link-button" href="/0602">
              이동
            </a>
          </div>

          <div>
            [예제 02] 입고 등록{" "}
            <a className="link-button" href="/0603">
              이동
            </a>
          </div>

          <div>
            [예제 03] 전체 사용자 포인트 지급{" "}
            <a className="link-button" href="/0604">
              이동
            </a>
          </div>
        </div>

        <div className="title">07 라우팅</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0701">
              이동
            </a>
          </div>
        </div>

        <div className="title">08 쿠키</div>
        <div>
          <div>
            [01 문법]{" "}
            <a className="link-button" href="/0801">
              이동
            </a>
          </div>
        </div>

        <div className="title">09 자료구조</div>
        <div>
          <div>
            [01 목차]{" "}
            <a className="link-button" href="/0901">
              이동
            </a>
          </div>

          <div>
            [예제 01] 이미지 DB
            <a className="link-button" href="/0902">
              이동
            </a>
          </div>

          <div>
            [예제 02] 학생 성적 DB
            <a className="link-button" href="/0903">
              이동
            </a>
          </div>

          <div>
            [예제 03] 햄버거 DB
            <a className="link-button" href="/0904">
              이동
            </a>
          </div>

          <div>
            [예제 04] 아이스크림 딱 하나
            <a className="link-button" href="/0905">
              이동
            </a>
          </div>

          <div>
            [예제 05] 만원의 행복
            <a className="link-button" href="/0906">
              이동
            </a>
          </div>

          <div>
            [예제 06] 사용자 DB
            <a className="link-button" href="/0907">
              이동
            </a>
          </div>

          <div>
            [예제 07] 도서관 DB
            <a className="link-button" href="/0908">
              이동
            </a>
          </div>
        </div>

        <div className="title">10 인자</div>
        <div>
          <div>
            [01 목차]{" "}
            <a className="link-button" href="/1001">
              이동
            </a>
          </div>

          <div>
            [예제 01]
            <a className="link-button" href="/1002">
              이동
            </a>
          </div>

          <div>
            [예제 02]
            <a className="link-button" href="/1003">
              이동
            </a>
          </div>

          <div>
            [예제 03]
            <a className="link-button" href="/1004">
              이동
            </a>
          </div>

          <div>
            [예제 04]
            <a className="link-button" href="/1005">
              이동
            </a>
          </div>

          <div>
            [예제 05]
            <a className="link-button" href="/1006">
              이동
            </a>
          </div>

          <div>
            [예제 06]
            <a className="link-button" href="/1007">
              이동
            </a>
          </div>

          <div>
            [예제 07]
            <a className="link-button" href="/1008">
              이동
            </a>
          </div>

          <div>
            [예제 08]
            <a className="link-button" href="/1009">
              이동
            </a>
          </div>

          <div>
            [예제 09]
            <a className="link-button" href="/1010">
              이동
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
