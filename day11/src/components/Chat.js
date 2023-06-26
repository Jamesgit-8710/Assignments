import React, { useState } from "react";
import "../styles/chat.css";
import Child from "./Child";
import InputEmoji from "react-input-emoji";

function Chat() {
    const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="chat">
      <div className="header">
        <h1 style={{marginTop: 10}}>Ter Naguyen</h1>
        <div className="active">
          <div
            style={{
              height: 7,
              width: 7,
              borderRadius: "50%",
              backgroundColor: "#45E171",
            }}
          ></div>
          <p style={{ fontSize: 12, color: "#AAB8C2" ,marginLeft: 5}}>Active now</p>
        </div>
      </div>
      <div className="chats">
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
        <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} />
        <Child bgColor={"#FF5151"} color={"white"} align={"right"} />
      </div>
      <div className="msgBox">
      <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
      </div>
    </div>
  );
}

export default Chat;
