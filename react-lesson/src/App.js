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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/0101" element={<Index0101 />}></Route>
        <Route path="/0102" element={<Index0102 />}></Route>
        <Route path="/0103" element={<Index0103 />}></Route>
        <Route path="/0104" element={<Index0104 />}></Route>
        <Route path="/0105" element={<Index0105 />}></Route>
        <Route path="/0106" element={<Index0106 />}></Route>
        <Route path="/0107" element={<Index0107 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
