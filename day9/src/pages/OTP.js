import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../slices/user/otp.slice";
import { useNavigate } from "react-router";
import { addUser } from "../slices/user/otp.slice";
import { log } from "../slices/resume/resume.slice";

function OTP() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state3 = useSelector((state) => state.resumes);
  const state2 = useSelector((state) => state.otp);

  const onFinish = (values) => {
    const x = process.env.REACT_APP_OTP;

    if (values.password === x) {
      dispatch(addUser(state.data));
      dispatch(verify());

      const a = state.data;

      const x = state3.filter((e) => {
        return a === e.id;
      });

      if (x.length === 0) {
        // console.log(x);
        const temp = {
          id: a,
          data: [],
        };
        dispatch(log(temp));
      }

      navigate("/", { replace: true });
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
            label="OTP"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="OTP" />
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
