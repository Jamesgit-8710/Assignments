import React from "react";
import '../styles/home.css'
import { useDispatch, useSelector } from "react-redux";
import { addResume } from '../slices/resume/resume.slice'
import { useNavigate } from "react-router";
// import plus from '../assets/plus.png'

function Home() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const send = () => {
    navigate("/create")
  }

  return (
    <div>
      <div className="header">

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
