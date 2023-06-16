import React, { useState, useEffect } from "react";
import { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import "../styles/login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Outlet, Link } from "react-router-dom";

function Login() {
  //localStorage.setItem("users", JSON.stringify(localStorage.getItem("users")));

  const [value, setValue] = useState("e");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [next, setNext] = useState("")

  const onAccessChange = (event) => {
    if (user === "" || event.target.value === "") {
      //console.log("fields are empty");
    } else {
      const x = JSON.parse(localStorage.getItem("users"));

      if (x !== null) {

        let flag = 0;

        {
          x.map((e) => {
            //console.log(e.u,e.p)
            if (e.u == user && e.p == pass && e.prof == event.target.value) {
              console.log("login Successful!")
              flag = 1;
            }
          })
        }

        if (flag) {
          setNext("/home")
        } else {
          setNext("")
        }

      }

      // setItems([...x, { u: user, p: pass }]);
      // localStorage.setItem("users", JSON.stringify(items));


      //setItems((old)=> [ ...old, {u:user,p:pass} ])
    }

    setValue(event.target.value);
  };

  const onUserChange = (event) => {
    if (event.target.value === "" || pass === "") {
      //console.log("fields are empty");
    } else {
      const x = JSON.parse(localStorage.getItem("users"));

      if (x !== null) {

        let flag = 0;

        {
          x.map((e) => {
            //console.log(e.u,e.p)
            if (e.u == event.target.value && e.p == pass && e.prof == value) {
              console.log("login Successful!")
              flag = 1;
            }
          })
        }

        if (flag) {
          setNext("/home")
        } else {
          setNext("")
        }

      }

      // setItems([...x, { u: user, p: pass }]);
      // localStorage.setItem("users", JSON.stringify(items));


      //setItems((old)=> [ ...old, {u:user,p:pass} ])
    }


    setUser(event.target.value);
  };

  const onPassChange = (event) => {
    if (user === "" || event.target.value === "") {
      //console.log("fields are empty");
    } else {
      const x = JSON.parse(localStorage.getItem("users"));

      if (x !== null) {

        let flag = 0;

        {
          x.map((e) => {
            //console.log(e.u,e.p)
            if (e.u == user && e.p == event.target.value && e.prof == value) {
              console.log("login Successful!")
              flag = 1;
            }
          })
        }

        if (flag) {
          setNext("/home")
        } else {
          setNext("")
        }

      }

      // setItems([...x, { u: user, p: pass }]);
      // localStorage.setItem("users", JSON.stringify(items));


      //setItems((old)=> [ ...old, {u:user,p:pass} ])
    }
    setPass(event.target.value);
  };

  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const x = JSON.parse(localStorage.getItem("users"));
  //   setItems([...x]);
  // }, []);




  // useEffect(() => {
  //   const x = JSON.parse(localStorage.getItem('items'))

  //   if(x)
  //   setItems([])
  //   else
  //   setItems(x)

  //   localStorage.setItem("users", JSON.stringify(items));
  //   console.log(x)
  // }, [items]);

  const submit = () => {

    //console.log(next,888888888)


    // setItems([...x, { u: user, p: pass }]);
    // localStorage.setItem("users", JSON.stringify(items));


    //setItems((old)=> [ ...old, {u:user,p:pass} ])

  };

  return (
    <div className="login">
      <div className="logDiv">
        <div className="leftDiv">
          <h2 style={{ marginBottom: 25 }}>LOG IN</h2>

          <div className="inputs">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            // onFinish={console.log("successful")}
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
              <Radio.Group
                onChange={onAccessChange}
                className="radio"
                value={value}
              >
                <Radio value={"e"}>Employee</Radio>
                <Radio value={"a"}>Admin</Radio>
              </Radio.Group>
              <br />

              <Form.Item>
                <Link to={next}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={submit}
                  >

                    Log in

                  </Button>
                </Link>
              </Form.Item>

              or <Link to="/signup"><a>register now!</a></Link>
            </Form>
          </div>
        </div>
        <div className="rightDiv"></div>
      </div>
    </div>
  );
}

export default Login;
