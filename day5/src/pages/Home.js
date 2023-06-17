import { useState, useEffect } from "react";
import "../styles/home.css";
import design from "../assets/design2.jpg";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { LockOutlined } from '@ant-design/icons';
import { antdButton, Checkbox, Form, Input } from 'antd';

//const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

function Home() {

  const [visiblity, setVis] = useState("none");
  const [profileVis, setProVis] = useState("none");

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [prof, setProf] = useState("")
  const [index, setIndex] = useState(-1)
  const [data, setData] = useState([])
  const [updatedUN, setUpdatedUn] = useState("")
  const [updatedPass, setUpdatedPass] = useState("")

  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("currUser"));
    const y = JSON.parse(localStorage.getItem("users"));

    const u = y[x].u
    const p = y[x].p
    const prof = y[x].prof


    setData(y)
    setName(u)
    setPass(p)
    setIndex(x)

    if (prof === 'e')
      setProf("Customer")
    else
      setProf("Admin")

  }, []);

  const vis = () => {
    setVis("block")
  }

  const hide = () => {
    setVis("none")
  }

  const onAvater = () => {
    setProVis("block")
  }

  const out = () => {
    setProVis("none")
  }

  const callFunctions = () => {
    setVis("block")
    setProVis("none")
  }

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('currUser');
    navigate('/login', { replace: true })
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const updateUN = (e) => {
    setUpdatedUn(e.target.value)
  }

  const updatePass = (e) => {
    setUpdatedPass(e.target.value)
  }

  const update = () => {

  }

  return (
    <>
      <div className="home" >
        <div className="navbar">
          <div>
            <h1 className="logo">ZenStore</h1>
            <p className="tagLine">Powered by Zenmonk</p>
          </div>

          <Space size={16} onClick={onAvater} wrap>
            <Avatar
              size="large"
              style={{ backgroundColor: "white", color: "greenyellow" }}
              icon={<UserOutlined />}
            />
          </Space>
        </div>
        <div className="mainDiv">

        </div>
      </div>

      <div className="popupBackground" style={{ display: visiblity }}>
        <div className="popupBox">
          <div className="popupTop">
            <h3>Profile</h3>
            <div className="exit" onClick={hide}></div>
          </div>
          <div style={{textAlign: "center", marginTop :30}}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" onChange={updateUN}/>} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" onChange={updatePass}/>}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>


              <Form.Item>
                <Button type="primary" onClick={update} style={{backgroundColor: "rgb(83, 143, 255)",color: "white"}} htmlType="submit" className="login-form-button">
                  Update
                </Button>

              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="profile" style={{ display: profileVis }}>
        <div className="popupTop">
          <h4>signed as</h4>
          <div className="exit" onClick={out}></div>
        </div>
        <h3>{name}</h3>
        <h3>{pass}</h3>
        <h3>{prof}</h3>
        <Button variant="outlined" onClick={callFunctions}>Edit</Button>
        <Button variant="outlined" color="error" onClick={logOut}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default Home;
