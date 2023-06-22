import React from "react";
import { Button, Form, Input } from "antd";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { addUser, verify } from "../slices/user/user.slice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (value) => {
    dispatch(addUser(value.PhoneNumber));
    dispatch(verify("otp"))
    // console.log(value.PhoneNumber)
    navigate("/",{ replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Phone number"
            name="PhoneNumber"
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <Input type="number" placeholder="Phone number" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
