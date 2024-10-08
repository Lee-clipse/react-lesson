import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Index0101 from "./lesson/01_상태/01_문법.jsx";
import Index0102 from "./lesson/01_상태/예제_01.jsx";
import Index0103 from "./lesson/01_상태/예제_02.jsx";
import Index0104 from "./lesson/01_상태/예제_03.jsx";
import Index0105 from "./lesson/01_상태/예제_04.jsx";
import Index0106 from "./lesson/01_상태/예제_05.jsx";
import Index0107 from "./lesson/01_상태/예제_06.jsx";
import Index0201 from "./lesson/02_렌더링/01_문법.jsx";
import Index0202 from "./lesson/02_렌더링/예제_01.jsx";
import Index0203 from "./lesson/02_렌더링/예제_02.jsx";
import Index0204 from "./lesson/02_렌더링/예제_03.jsx";
import Index0205 from "./lesson/02_렌더링/예제_04.jsx";
import Index0206 from "./lesson/02_렌더링/예제_05.jsx";
import Index0207 from "./lesson/02_렌더링/예제_06.jsx";
import Index0301 from "./lesson/03_컴포넌트/01_문법.jsx";
import Index0302 from "./lesson/03_컴포넌트/예제_01.jsx";
import Index0303 from "./lesson/03_컴포넌트/예제_02.jsx";
import Index0304 from "./lesson/03_컴포넌트/예제_03.jsx";
import Index0305 from "./lesson/03_컴포넌트/예제_04.jsx";
import Index0306 from "./lesson/03_컴포넌트/예제_05.jsx";
import Index0307 from "./lesson/03_컴포넌트/예제_06.jsx";
import Index0401 from "./lesson/04_스타일/01_문법.jsx";
import Index0402 from "./lesson/04_스타일/예제_01.jsx";
import Index0403 from "./lesson/04_스타일/예제_02.jsx";
import Index0501 from "./lesson/05_훅/01_문법.jsx";
import Index0502 from "./lesson/05_훅/예제_01.jsx";
import Index0503 from "./lesson/05_훅/예제_02.jsx";
import Index0504 from "./lesson/05_훅/예제_03.jsx";
import Index0601 from "./lesson/06_API/01_문법.jsx";
import Index0602 from "./lesson/06_API/예제_01.jsx";
import Index0603 from "./lesson/06_API/예제_02.jsx";
import Index0604 from "./lesson/06_API/예제_03.jsx";
import Index0001 from "./lesson/연습문제/문제_01.jsx";
import Work0001 from "./work01/index.jsx";
import Work0002 from "./work02/index.jsx";
import Index0701 from "./lesson/07_라우팅/01_문법.jsx";
import Index0801 from "./lesson/08_쿠키/01_문법.jsx";
import Index0901 from "./lesson/09_자료구조/01_문법.jsx";
import Index0902 from "./lesson/09_자료구조/예제_01.jsx";
import Index0903 from "./lesson/09_자료구조/예제_02.jsx";
import Index0904 from "./lesson/09_자료구조/예제_03.jsx";
import Index0905 from "./lesson/09_자료구조/예제_04.jsx";
import Index0906 from "./lesson/09_자료구조/예제_05.jsx";
import Index0907 from "./lesson/09_자료구조/예제_06.jsx";
import Index0908 from "./lesson/09_자료구조/예제_07.jsx";
import Index1001 from "./lesson/10_인자/01_문법.jsx";
import Index1002 from "./lesson/10_인자/예제_01.jsx";
import Index1003 from "./lesson/10_인자/예제_02.jsx";
import Index1004 from "./lesson/10_인자/예제_03.jsx";
import Index1005 from "./lesson/10_인자/예제_04.jsx";
import Index1006 from "./lesson/10_인자/예제_05.jsx";
import Index1007 from "./lesson/10_인자/예제_06.jsx";
import Index1008 from "./lesson/10_인자/예제_07.jsx";
import Index1009 from "./lesson/10_인자/예제_08.jsx";
import Index1010 from "./lesson/10_인자/예제_09.jsx";
import Work0003 from "./work03/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/10001" element={<Work0001 />}></Route>
        <Route path="/10002" element={<Work0002 />}></Route>
        <Route path="/10003" element={<Work0003 />}></Route>

        <Route path="/0001" element={<Index0001 />}></Route>

        <Route path="/0101" element={<Index0101 />}></Route>
        <Route path="/0102" element={<Index0102 />}></Route>
        <Route path="/0103" element={<Index0103 />}></Route>
        <Route path="/0104" element={<Index0104 />}></Route>
        <Route path="/0105" element={<Index0105 />}></Route>
        <Route path="/0106" element={<Index0106 />}></Route>
        <Route path="/0107" element={<Index0107 />}></Route>

        <Route path="/0201" element={<Index0201 />}></Route>
        <Route path="/0202" element={<Index0202 />}></Route>
        <Route path="/0203" element={<Index0203 />}></Route>
        <Route path="/0204" element={<Index0204 />}></Route>
        <Route path="/0205" element={<Index0205 />}></Route>
        <Route path="/0206" element={<Index0206 />}></Route>
        <Route path="/0207" element={<Index0207 />}></Route>

        <Route path="/0301" element={<Index0301 />}></Route>
        <Route path="/0302" element={<Index0302 />}></Route>
        <Route path="/0303" element={<Index0303 />}></Route>
        <Route path="/0304" element={<Index0304 />}></Route>
        <Route path="/0305" element={<Index0305 />}></Route>
        <Route path="/0306" element={<Index0306 />}></Route>
        <Route path="/0307" element={<Index0307 />}></Route>

        <Route path="/0401" element={<Index0401 />}></Route>
        <Route path="/0402" element={<Index0402 />}></Route>
        <Route path="/0403" element={<Index0403 />}></Route>

        <Route path="/0501" element={<Index0501 />}></Route>
        <Route path="/0502" element={<Index0502 />}></Route>
        <Route path="/0503" element={<Index0503 />}></Route>
        <Route path="/0504" element={<Index0504 />}></Route>

        <Route path="/0601" element={<Index0601 />}></Route>
        <Route path="/0602" element={<Index0602 />}></Route>
        <Route path="/0603" element={<Index0603 />}></Route>
        <Route path="/0604" element={<Index0604 />}></Route>

        <Route path="/0701" element={<Index0701 />}></Route>

        <Route path="/0801" element={<Index0801 />}></Route>

        <Route path="/0901" element={<Index0901 />}></Route>
        <Route path="/0902" element={<Index0902 />}></Route>
        <Route path="/0903" element={<Index0903 />}></Route>
        <Route path="/0904" element={<Index0904 />}></Route>
        <Route path="/0905" element={<Index0905 />}></Route>
        <Route path="/0906" element={<Index0906 />}></Route>
        <Route path="/0907" element={<Index0907 />}></Route>
        <Route path="/0908" element={<Index0908 />}></Route>

        <Route path="/1001" element={<Index1001 />}></Route>
        <Route path="/1002" element={<Index1002 />}></Route>
        <Route path="/1003" element={<Index1003 />}></Route>
        <Route path="/1004" element={<Index1004 />}></Route>
        <Route path="/1005" element={<Index1005 />}></Route>
        <Route path="/1006" element={<Index1006 />}></Route>
        <Route path="/1007" element={<Index1007 />}></Route>
        <Route path="/1008" element={<Index1008 />}></Route>
        <Route path="/1009" element={<Index1009 />}></Route>
        <Route path="/1010" element={<Index1010 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
