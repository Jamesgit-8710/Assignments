import React from "react";
import '../styles/home.css'
import { useDispatch, useSelector } from "react-redux";
import { addResume } from '../slices/resume/resume.slice'
import { useNavigate } from "react-router";

function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const send = () => {
    navigate("/create")
  }

  return (
    <div>
      <div className="header">
        <h2 className="res">Resume<span className="build">Builder</span></h2>
      </div>
      <div>
        <div className="card">
          {process.env.REACT_APP_OTP}
        </div>

      </div>
      <div className="float-btn" onClick={send}></div>
    </div>
  );
}

export default Home;
