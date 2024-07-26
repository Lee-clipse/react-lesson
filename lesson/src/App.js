import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";

import Test01 from "./sandbox/Test_01.jsx";
import Test02 from "./sandbox/Test_02.jsx";
import Test03 from "./sandbox/Test_03.jsx";
import Test04 from "./sandbox/Test_04.jsx";
import Test05 from "./sandbox/Test_05.jsx";

import Index0001 from "./lesson/연습문제/문제_01.jsx";
import Index0002 from "./lesson/연습문제/문제_02.jsx";
import Index0003 from "./lesson/연습문제/문제_03.jsx";
import Index0004 from "./lesson/연습문제/문제_04.jsx";
import Index0005 from "./lesson/연습문제/문제_05.jsx";

import Index0101 from "./lesson/01_자료형/01_숫자.jsx";
import Index0102 from "./lesson/01_자료형/02_문자.jsx";
import Index0103 from "./lesson/01_자료형/03_객체.jsx";
import Index0104 from "./lesson/01_자료형/04_배열.jsx";

import Index0201 from "./lesson/02_조건문/01_문법.jsx";
import Index0202 from "./lesson/02_조건문/예제_01.jsx";
import Index0203 from "./lesson/02_조건문/예제_02.jsx";
import Index0204 from "./lesson/02_조건문/예제_03.jsx";
import Index0205 from "./lesson/02_조건문/예제_04.jsx";

import Index0301 from "./lesson/03_반복문/01_문법.jsx";
import Index0302 from "./lesson/03_반복문/예제_01.jsx";
import Index0303 from "./lesson/03_반복문/예제_02.jsx";
import Index0304 from "./lesson/03_반복문/예제_03.jsx";
import Index0305 from "./lesson/03_반복문/예제_04.jsx";
import Index0306 from "./lesson/03_반복문/예제_05.jsx";

import Index0401 from "./lesson/04_함수/01_문법.jsx";
import Index0402 from "./lesson/04_함수/02_이벤트_문법.jsx";
import Index0403 from "./lesson/04_함수/예제_01.jsx";
import Index0404 from "./lesson/04_함수/예제_02.jsx";
import Index0405 from "./lesson/04_함수/예제_03.jsx";
import Index0406 from "./lesson/04_함수/예제_04.jsx";
import Index0407 from "./lesson/04_함수/예제_05.jsx";

import Index0501 from "./lesson/05_메서드/01_정렬/01_정렬.jsx";
import Index0502 from "./lesson/05_메서드/01_정렬/예제_01.jsx";
import Index0503 from "./lesson/05_메서드/01_정렬/예제_02.jsx";
import Index0504 from "./lesson/05_메서드/02_필터링/02_필터링";
import Index0505 from "./lesson/05_메서드/02_필터링/예제_03.jsx";
import Index0506 from "./lesson/05_메서드/02_필터링/예제_04.jsx";
import Index0507 from "./lesson/05_메서드/03_날짜/03_날짜";
import Index0508 from "./lesson/05_메서드/03_날짜/예제_05.jsx";
import Index0509 from "./lesson/05_메서드/03_날짜/예제_06.jsx";
import Index0510 from "./lesson/05_메서드/04_정규식/04_정규식";
import Index0511 from "./lesson/05_메서드/04_정규식/예제_07.jsx";
import Index0512 from "./lesson/05_메서드/04_정규식/예제_08.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/test-01" element={<Test01 />}></Route>
        <Route path="/test-02" element={<Test02 />}></Route>
        <Route path="/test-03" element={<Test03 />}></Route>
        <Route path="/test-04" element={<Test04 />}></Route>
        <Route path="/test-05" element={<Test05 />}></Route>

        <Route path="/practice-01" element={<Index0001 />}></Route>
        <Route path="/practice-02" element={<Index0002 />}></Route>
        <Route path="/practice-03" element={<Index0003 />}></Route>
        <Route path="/practice-04" element={<Index0004 />}></Route>
        <Route path="/practice-05" element={<Index0005 />}></Route>

        <Route path="/0101" element={<Index0101 />}></Route>
        <Route path="/0102" element={<Index0102 />}></Route>
        <Route path="/0103" element={<Index0103 />}></Route>
        <Route path="/0104" element={<Index0104 />}></Route>

        <Route path="/0201" element={<Index0201 />}></Route>
        <Route path="/0202" element={<Index0202 />}></Route>
        <Route path="/0203" element={<Index0203 />}></Route>
        <Route path="/0204" element={<Index0204 />}></Route>
        <Route path="/0205" element={<Index0205 />}></Route>

        <Route path="/0301" element={<Index0301 />}></Route>
        <Route path="/0302" element={<Index0302 />}></Route>
        <Route path="/0303" element={<Index0303 />}></Route>
        <Route path="/0304" element={<Index0304 />}></Route>
        <Route path="/0305" element={<Index0305 />}></Route>
        <Route path="/0306" element={<Index0306 />}></Route>

        <Route path="/0401" element={<Index0401 />}></Route>
        <Route path="/0402" element={<Index0402 />}></Route>
        <Route path="/0403" element={<Index0403 />}></Route>
        <Route path="/0404" element={<Index0404 />}></Route>
        <Route path="/0405" element={<Index0405 />}></Route>
        <Route path="/0406" element={<Index0406 />}></Route>
        <Route path="/0407" element={<Index0407 />}></Route>

        <Route path="/0501" element={<Index0501 />}></Route>
        <Route path="/0502" element={<Index0502 />}></Route>
        <Route path="/0503" element={<Index0503 />}></Route>
        <Route path="/0504" element={<Index0504 />}></Route>
        <Route path="/0505" element={<Index0505 />}></Route>
        <Route path="/0506" element={<Index0506 />}></Route>
        <Route path="/0507" element={<Index0507 />}></Route>
        <Route path="/0508" element={<Index0508 />}></Route>
        <Route path="/0509" element={<Index0509 />}></Route>
        <Route path="/0510" element={<Index0510 />}></Route>
        <Route path="/0511" element={<Index0511 />}></Route>
        <Route path="/0512" element={<Index0512 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
