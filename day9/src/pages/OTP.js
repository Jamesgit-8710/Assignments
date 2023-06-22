import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../slices/user/otp.slice";
import { useNavigate } from "react-router";
import { addUser } from "../slices/user/otp.slice";

function OTP() {

  const state = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const x = process.env.REACT_APP_OTP;

    if (values.password === x) {
      dispatch(addUser(state.data))
      dispatch(verify())
      navigate("/", { replace: true })
    }

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
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
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

export default OTP;
