import React from "react";
import "../styles/temp1.css";

function TempOne({ data }) {
  return (
    <div className="preview">
      <div
        style={{
          padding: "10px",
          height: "calc(30% - 20px)",
          width: "calc(40% - 20px)",
          backgroundColor: "rgb(205, 155, 162)",
        }}
      >
        <h2>{data.name}</h2>
        <p>{data.gmail}</p>
        <p>{data.ph}</p>
      </div>
      <div
        style={{
          padding: "10px",
          height: "calc(30% - 20px)",
          width: "calc(60% - 20px)",
          backgroundColor: "rgb(233, 223, 224)",
        }}
      >
        <h3>About</h3>
        <p style={{ wordBreak: "break-word" }}>{data.about}</p>
      </div>
      <div
        style={{
          padding: "10px",
          height: "calc(70% - 20px)",
          width: "calc(40% - 20px)",
          backgroundColor: "rgb(219, 194, 198)",
        }}
      >
        <h3>Skills</h3>
        <p style={{ wordBreak: "break-word" }}>{data.skills}</p>
      </div>
      <div
        style={{
          padding: "10px",
          height: "calc(70% - 20px)",
          width: "calc(60% - 20px)",
          backgroundColor: "rgb(253, 248, 249)",
        }}
      >
        <h3>Work experience</h3>
        <h4 style={{wordBreak: "break-word"}}>{data.com}</h4>
        <p>{data.ft}</p>
        <p>{data.des}</p>
      </div>
    </div>
  );
}

export default TempOne;
