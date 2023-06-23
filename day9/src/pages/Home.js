import React, { useState } from "react";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { addResume } from "../slices/resume/resume.slice";
import { useNavigate } from "react-router";
import TempOne from "../components/TempOne";
import TempTwo from "../components/TempTwo";
import TempThird from "../components/TempThird";
import close from "../assets/close.png";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import exit from '../assets/exit.png';
import { logout } from "../slices/user/otp.slice";
import { verify } from "../slices/user/user.slice";

function Home() {
  const state = useSelector((state) => state.resumes);
  const state2 = useSelector((state2) => state2.otp.data);
  const [vis, setVis] = useState("none");
  const [val, setVal] = useState(-1);
  const [val2, setVal2] = useState();
  const [img, setImg] = useState()
  
  let i;

  state.map((e, index) => {
    if (state2 === e.id)
    i = index;
  });

  console.log(state[i].data[val])


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const send = () => {
    navigate("/create");
  };

  const set = (e) => {
    setVal(e)
    setVis("flex")
    // console.log(e)
  }

  const set2 = (e) => {
    setVal2(e)
  }

  const call = () => {
    dispatch(logout())
    navigate('/',{replace: true})
    dispatch(verify("login"))
  }

  return (
    <div>
      <div className="header">
        <h2 className="res">
          Resume<span className="build">Builder</span>
        </h2>
        <img src={exit} height={50} onClick={call}/>
      </div>
      <div className="list">
        {state[i].data.map((e,index) => {
          return <div className="card" style={{backgroundImage: `url(${s2})`,backgroundSize: "cover"}} key={index}  onClick={()=>{set(e.id);set2(index);}}>
            <h3>{e.name}</h3>
          </div>;
        })}
      </div>
      <div className="float-btn" onClick={send}></div>

      <div className="popupBack" style={{ display: vis }}>
        <img
          onClick={() => setVis("none")}
          src={close}
          height={20}
          style={{ position: "fixed", top: "20px", right: "30px" }}
        />

        {val == 0 && <TempOne data={state[i].data[val2]}/>}
        {val == 1 && <TempTwo data={state[i].data[val2]}/>}
        {val == 2 && <TempThird data={state[i].data[val2]}/>}

      </div>
    </div>
  );
}

export default Home;
