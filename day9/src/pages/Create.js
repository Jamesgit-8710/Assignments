import React from "react";
import "../styles/create.css";
import eye from '../assets/eye.png'
import reset from '../assets/reset.png'
import { Input } from 'antd';

function Create() {
  return (
    <div className="create">
      <div className="header">
        <h2 className="res">Resume<span className="build">Builder</span></h2>
        <div className="actions">
          <img src={eye} className="rightSpace" style={{marginTop: 4}} height={28}/>
          <img src={reset} style={{marginTop: 8}} className="rightSpace" height={20}/>
          <h3 style={{marginTop: 4,color: "white", border: "1px solid white", padding: "0px 15px",borderRadius: "5px"}} className="rightSpace">SUBMIT</h3>
        </div>
      </div>
      <div className="main">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
          <Input className="margin" placeholder="Name" />
          <Input className="margin" placeholder="Profession" />
          <Input className="margin" placeholder="About" />
          <Input className="margin" placeholder="Basic usage" />
          <Input className="margin" placeholder="Basic usage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
