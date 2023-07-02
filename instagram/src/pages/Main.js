import React, { useEffect, useState } from "react";
import "../styles/main.css";
import coloredText from "../assets/coloredText.webp";
import not from "../assets/notification.png";
import msg from "../assets/send.png";
import user2 from "../assets/user2.png";
import home from "../assets/home.png";
import close from "../assets/close.png";
import image from "../assets/image.png";
import { Input, Modal } from 'antd';
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/user.auth";
import { addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { Button, message, Space } from 'antd';
import Post from "../components/Post";
import User from "../components/User";
import sample from '../assets/sample.png'
import start from '../assets/start.jpg'
import InputEmoji, { async } from "react-input-emoji";

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const Main = () => {

  const [messageApi, contextHolder] = message.useMessage()

  const state = useSelector((state) => state.users.User);

  const [val, setVal] = useState(1);
  const [vis, setVis] = useState("none");
  const [img, setImg] = useState("")
  const [file, setFile] = useState("")
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const [userData, setUserData] = useState("");
  const [vis2, setVis2] = useState("none");

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [text, setText] = useState("")

  const warning = (e) => {
    messageApi.open({
      type: 'warning',
      content: e,
    });
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Posted',
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    if (file !== "" && text !== "") {

      setConfirmLoading(true);

      const imgName = state + Date().toString()


      const storageRef = ref(storage, 'images/' + imgName);

      await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded');
      });


      let imgUrl = "";

      await getDownloadURL(ref(storage, 'images/' + imgName)).then((url) => {
        imgUrl = url
      }).catch((error) => {
        alert(error)
      })

      await addDoc(collection(db, "posts"), {
        uploadedBy: state,
        image: imgUrl,
        des: text,
        createdAt: serverTimestamp(),
        likeList: [],
        commentList: []
      });

      success();

      setTimeout(() => {
        setOpen(false);
      }, 1000);

      setConfirmLoading(false);

    } else {
      if (text === "" && file === "")
        warning("fields are empty")
      else if (text === "")
        warning("add the description")
      else if (file === "")
        warning("kindly select the image")
    }

  };

  const handleCancel = () => {
    setFile("");
    setText("");
    setOpen(false);
  };

  const set = (event) => {
    if (event.target.value !== "") {
      const f = event.target.files[0];

      setFile(f);

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;

        setImg(base64Image);
      };

      reader.readAsDataURL(f);
    }
  }

  useEffect(() => {

    const colRef = collection(db, "posts");

    onSnapshot(colRef, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          return [{ data: doc.data(), id: doc.id }];
        })
      );
    });

    const userRef = collection(db, "users");

    onSnapshot(userRef, (snapshot) => {
      setUser(
        snapshot.docs.map((doc) => {
          return [doc.data()];
        })
      );
    });

  }, [])


  const send = async (e) => {
    console.log(e);

    // const roomId = [id.id, state].sort();

    // const room = roomId.join("_");

    // await addDoc(collection(db, "chatRoom"), {
    //   sId: state,
    //   createdAt: serverTimestamp(),
    //   text: e,
    //   roomId: room
    // });
  }

  const setMessage = (e) => {
    console.log(e)
    setUserData(e)
  }

  const display = () => {
    setVis2("flex");
  }

  return (
    <div className="homeBackGround">
      {contextHolder}
      <div className="nav">
        <img src={coloredText} height={60} />
        <div className="right">
          <button className="create" onClick={showModal}>Create new Post</button>
          <img src={home} height={25} className="image" onClick={() => { setVal(1) }} />
          <img src={msg} height={25} className="image" onClick={() => { setVal(0) }} />
          <img src={not} height={25} className="image" onClick={() => { setVis("block") }} />
          <img src={user2} height={30} className="image" onClick={() => { }} />
        </div>
      </div>
      {
        val ?
          <div className="main">
            <div className="scroll">
              {
                data.map((item) => {
                  // console.log(item[0].data)
                  const likes = item[0].data.likeList;
                  const like = likes.includes(state);
                  return <Post item={item[0].data} like={like} id={item[0].id} display={display} />
                })
              }
            </div>
          </div>
          :
          <div className="main">
            {
              userData !== "" ?
                <div className="scroll">
                  <div style={{ display: "flex", padding: "10px 20px", borderBottom: "1px solid rgb(237, 237, 237)" }}>
                    <img src={userData[0].image} height={40} width={42} style={{ borderRadius: "50%" }} />
                    <p style={{ margin: "6px 0px 0px 10px", fontWeight: "500" }}>{userData[0].uName}</p>
                  </div>
                  <div style={{ height: "calc(100% - 140px)", width: "calc(100% - 40px)", wordBreak: "break-word", overflowY: "scroll", padding: "5px 20px" }}>

                  </div>
                  <div style={{ width: "100%", padding: "7px 0px" }}>
                    <InputEmoji
                      value={text}
                      // onChange={set}
                      cleanOnEnter
                      onEnter={send}
                      placeholder="Your message here..."
                    />
                  </div>
                </div>
                :
                <div style={{ height: "100%", width: "50%", margin: "auto", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <img src={start} style={{ width: "40%" }} />
                  <p style={{ fontSize: "1.5rem", marginBottom: "6rem" }}>Start your conversation</p>
                </div>
            }
            <div className="users">
              {
                user.map((item) => {
                  return <User item={item} call={setMessage} />
                })
              }
            </div>
          </div>
      }
      <div className="sideBar" style={{ display: vis, border: "1px solid rgb(237, 237, 237)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(237, 237, 237)" }}>
          <h4 style={{ margin: "10px 0px 10px 20px" }}>Notifications</h4>
          <img src={close} height={12} style={{ margin: "5px 10px 0px 0px", float: "right" }} onClick={() => { setVis("none") }} />
        </div>
        <div className="list">
          <div className='user'>
            <img src={sample} height={40} width={43} style={{ borderRadius: "50%" }} />
            <p style={{ margin: "6px 0px 0px 10px", fontWeight: "600" }}>James <span style={{ fontWeight: "400" }}>Liked your post.</span></p>
          </div>
          <div className='user'>
            <img src={sample} height={40} width={43} style={{ borderRadius: "50%" }} />
            <p style={{ margin: "6px 0px 0px 10px", fontWeight: "600" }}>James <span style={{ fontWeight: "400" }}>commented on your post.</span></p>
          </div>
        </div>
      </div>

      <Modal
        title="Create new post"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >

        <div style={{ height: "150px", width: "50%", backgroundImage: `url(${img})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", paddingTop: "50px", margin: "30px auto", borderRadius: "10px", border: "1px solid gray" }}>
          <div
            style={{
              height: "100px",
              width: "100px",
              // backgroundColor: "red",
              borderRadius: "10px",
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              margin: "auto",
              opacity: "0.7"
            }}
          >
            <input
              id="img"
              type="file"
              placeholder="img"
              style={{ height: 100, width: 100, opacity: "0" }}
              onChange={set}
            ></input>
          </div>
        </div>

        <TextArea
          showCount
          maxLength={1000}
          style={{ height: 120, resize: 'none', marginBottom: 50 }}
          onChange={(e) => { setText(e.target.value) }}
          placeholder="Write a caption..."
        />
      </Modal>
      <div style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)", position: "fixed", top: 0 , flexDirection: "column", display: vis2}} className="center" onClick={(e) => {e.stopPropagation(); setVis2("none");}}>
        <div style={{height: "70%", width: "40%", backgroundColor: "white", borderRadius: 10}}></div>
      </div>
    </div>
  );
};

export default Main;
