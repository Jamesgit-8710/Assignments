import React from "react";

function Child({bgColor,color,align}) {
  return (
    <div style={{width:"100%",height:"auto",overflow:"hidden",wordBreak:"break-all"}}>
      <div
        style={{
          backgroundColor: bgColor,
          color: color,
          padding: "12px 25px",
          borderRadius: 30,
          marginTop: 20,
          float: align,
          fontSize: 15
        }}
      >
        jfaljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      </div>
    </div>
  );
}

export default Child;
