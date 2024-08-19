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
import Index0001 from "./lesson/연습문제/문제_01.jsx";
import Work0001 from "./work01/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/1001" element={<Work0001 />}></Route>

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
