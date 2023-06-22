import React from 'react'
import Login from './pages/Login'
import OTP from './pages/OTP'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './pages/Create';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path={"/otp"} element={<OTP/>} />
          <Route path={"/home"} element={<Home/>} />
          <Route path={"/create"} element={<Create/>} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  )
}

export default App