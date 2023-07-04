import React from "react";
import { Button, Form, Input } from "antd";
import axios from 'axios'

const Signup = () => {

  const onFinish = async(values) => {
    console.log(values.username);
    const res = await axios.post('http://localhost:8000/signup',{username: values.username, password: values.password});
    alert(res.data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 300 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          backgroundColor: "rgba(0,0,0,0.050",
          padding: 50,
          borderRadius: "10px",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
