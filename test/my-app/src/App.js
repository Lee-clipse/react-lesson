import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./login/Login.jsx";
import Account from "./login/Account.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/0001" element={<Login />}></Route>
        <Route path="/0002" element={<Account />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
