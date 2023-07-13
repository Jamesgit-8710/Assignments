import React, { useEffect, useState } from "react";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import Vendor from "./pages/Vendor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let element = <LoginSignup />;

  const x = localStorage.getItem("id");

  if(x!==null){
    element = <Home/>;
  }

  return (
    // <LoginSignup/>
    // <Home/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={element} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
    // <Vendor/>
  );
};

export default App;
