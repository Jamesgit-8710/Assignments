import React from "react";
import "../styles/login.css";
import { Button, Form, Input } from "antd";
import google from "../assets/google.png";
import user from "../assets/user.png";
import cam from "../assets/camera.png";
import coloredText from "../assets/coloredText.webp";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/user.slice";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/user.auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { message } from 'antd';
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const logIn = () => {
    navigate("/");
  };

  const [messageApi, contextHolder] = message.useMessage();

  const info = (e) => {
    messageApi.info(e);
  };

  const onFinish = async(e) => {
    const email = e.email;
    const pass = e.password;
    const name = e.username;

    await createUserWithEmailAndPassword(auth, email, pass)
      .then( async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
          id: user.uid,
          uName: name,
          email: user.email,
          image: "",
        });

        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode==="auth/email-already-in-use")
        info("user already exist")
        else if(errorCode==="auth/invalid-email")
        info("enter a valid email")
        else if(errorCode==="auth/weak-password")
        info("password should have at least 6 characters")
        else
        info("invalid")
        // ..
      });
  };

  return (
    <div className="backGround center">
      {contextHolder}
      <div className="innerDiv">
        <img
          src={coloredText}
          alt="instagram"
          height={80}
          style={{ display: "block", margin: "auto" }}
        />
        <div
          style={{
            height: 150,
            width: 150,
            // backgroundColor: "red",
            margin: "auto",
            position: "relative",
            marginTop: 30,
          }}
        >
          <img
            src={user}
            alt="instagram"
            style={{ height: "100%", width: "100%" }}
          />
          <div
            style={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              position: "absolute",
              bottom: 0,
              right: 8,
              borderRadius: "50%",
              backgroundImage: `url(${cam})`,
              backgroundSize: "100%",
            }}
          >
            <input
              id="img"
              type="file"
              placeholder="img"
              style={{ height: 40, width: 40, opacity: "0" }}
            ></input>
          </div>
        </div>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              id="email"
              type="email"
              placeholder="email"
              style={{ height: 40, marginTop: 35 }}
            />
          </Form.Item>
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              id="username"
              type="text"
              placeholder="username"
              style={{ height: 40, marginTop: 25 }}
            />
          </Form.Item>
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              id="password"
              type="text"
              placeholder="password"
              style={{ height: 40, marginTop: 25 }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                height: "43px",
                width: "100%",
                fontSize: 18,
                marginTop: 38,
              }}
            >
              Sign up
            </Button>
          </Form.Item>
          <p style={{ marginTop: 55, marginBottom: 20 }}>
            Have an account?{" "}
            <span style={{ color: "blue", cursor: "pointer" }} onClick={logIn}>
              Login
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
