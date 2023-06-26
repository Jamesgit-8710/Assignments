import React from "react";
import "../styles/login.css";
import { Button, Form, Input } from "antd";
import { auth, provider } from "../services/user.auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate()
  const onFinish = (value) => {};

  const onFinishFailed = (errorInfo) => {};

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
      
      const user = result.user;

      navigate('/main',{ state: user.displayName})

      console.log(user)
    }).catch((error) => {
        console.log(error);
    })
  };

  return (
    <div className="backGround">
      <div className="innerDiv">
        <p>Sign in </p>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            name="PhoneNumber"
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <Input
            id="username"
              type="text"
              placeholder="username"
              style={{ height: 40, marginTop: 20 }}
            />
          </Form.Item>
          <Form.Item
            style={{ margin: 0, padding: 0 }}
            name="PhoneNumber"
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <Input.Password
            id="password"
              type="text"
              placeholder="password"
              style={{ height: 40, marginTop: 20 }}
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
              Sign in
            </Button>
          </Form.Item>
          or
          <h3 onClick={signIn}>Continue with Google</h3>
        </Form>
      </div>
    </div>
  );
}

export default Login;
