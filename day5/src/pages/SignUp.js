import React, { useState , useEffect } from "react";
import { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import "../styles/login.css";
import "../styles/signup.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Outlet, Link } from "react-router-dom";

function SignUp() {
    const [value, setValue] = useState("e");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
  
    const onAccessChange = (e) => {
      setValue(e.target.value);
    };
  
    const onUserChange = (e) => {
      setUser(e.target.value);
    };
  
    const onPassChange = (e) => {
      setPass(e.target.value);
    };
  
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const x = JSON.parse(localStorage.getItem("users"));
      setItems([...x]);
    }, []);

    const submit = () => {
        if (user === "" || pass === "") {
          console.log("fields are empty");
        } else {
          const x = JSON.parse(localStorage.getItem("users"));
          setItems([...x, { u: user, p: pass }]);
          localStorage.setItem("users", JSON.stringify(items));
          //setItems((old)=> [ ...old, {u:user,p:pass} ])
        }
    };

  return (
    <div className="login">
      <div className="logDiv">
        <div className="leftDiv signLeft"></div>
        <div className="rightDiv signRight">
          <h2 style={{ marginBottom: 25 }}>CREAT NEW ACCOUNT</h2>

          <div className="inputs">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={console.log("successful")}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  onChange={onUserChange}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={onPassChange}
                />
              </Form.Item>
              <Radio.Group onChange={onAccessChange} className="radio" value={value}>
                <Radio value={"e"}>Employee</Radio>
                <Radio value={"a"}>Admin</Radio>
              </Radio.Group>
              <br />
              <Form.Item>
              {/* <Link to={"/login"}> */}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={submit}
                >
                  CREATE
                </Button>
                {/* </Link> */}
              </Form.Item>
              Aready have account? <Link to={"/login"}><a>login</a></Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
