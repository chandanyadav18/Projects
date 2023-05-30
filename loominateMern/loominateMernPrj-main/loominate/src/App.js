import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Otp from "./pages/Otp/Otp";
import SetUp from "./pages/SetUp/SetUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/setUp" element={<SetUp />} />
          {/*  <Topbar /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
