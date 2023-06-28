import React, { useEffect, useState } from "react";
import "../styles/chat.css";
import Child from "./Child";
import InputEmoji from "react-input-emoji";
import img from "../assets/message.png";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../services/user.auth";
import { useSelector } from "react-redux";

function Chat({ id }) {
  const [text, setText] = useState("");

  const [data, setData] = useState([]);

  const [name, setName] = useState("");

  const state = useSelector((state) => state.users.User);

  const roomId = [id.id, state].sort();

  const room = roomId.join("_");

  console.log("id----->",id)
  console.log("state------->",state)
  console.log("room------->",room)

  useEffect(() => {
    const colRef = query(
      collection(db, "chatRoom"),
      orderBy("createdAt", "asc")
    );
    // console.log('----->',id)
    //real time update
    onSnapshot(colRef, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          return [doc.data()];
        })
      );
    });

    // setUpdated(
    //   data.filter((item) => {
    //     console.log(item[0]);
    //     if (item[0].id === id) {
    //       return item;
    //     }
    //   })
    // );
  }, []);

  //console.log(data)
  // console.log(data)

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  // console.log(state)

  const send = async () => {
    if (text !== "") {
      await addDoc(collection(db, "chatRoom"), {
        text: text,
        roomId: room,
        createdAt: serverTimestamp(),
        sId: state
      });
      setText("");
    }
  };

  return (
    <div className="chat">
      <div className="header">
        <h1 style={{ marginTop: 10 }}>{id.n}</h1>
        <div className="active">
          <div
            style={{
              height: 7,
              width: 7,
              borderRadius: "50%",
              backgroundColor: "#45E171",
            }}
          ></div>
          <p style={{ fontSize: 12, color: "#AAB8C2", marginLeft: 5 }}>
            Active now
          </p>
        </div>
      </div>
      <div className="chats">
        {/* <Child bgColor={"#F1F6F9"} color={"#617481"} align={"left"} text={"Dummy text"}/> */}
        {data.map((item) =>
          item[0].roomId === room ? (
            state===item[0].sId?
            <Child
              bgColor={"#FF5151"}
              color={"white"}
              align={"right"}
              text={item[0].text}
            />:
            <Child
              bgColor={"#F1F6F9"}
              color={"#617481"}
              align={"left"}
              text={item[0].text}
            />
          ) : null
        )}
        {/* <Child bgColor={"#FF5151"} color={"white"} align={"right"} text={"Dummy text"} /> */}
        {/* <Child
            bgColor={"#FF5151"}
            color={"white"}
            align={"right"}
            text={item[0].text}
          /> */}
      </div>
      <div className="msgBox">
        <InputEmoji
          value={text}
          onChange={setText}
          // cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Your message here..."
        />
        <img
          src={img}
          alt="send"
          height={40}
          style={{ marginLeft: 20, cursor: "pointer" }}
          onClick={send}
        />
      </div>
    </div>
  );
}

export default Chat;
