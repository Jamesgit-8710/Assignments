import React from "react";
import "../styles/home.css";
import design from "../assets/design2.jpg";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

function Home() {
  return (
    <div className="home">
      <div className="mainTop">
        <div className="mainLeft">
            <div>
                <h1 className="logo">Zenmonk</h1>
            </div>
        </div>
        <div className="mainRight">
          <div className="rightNav">
            <Space size={16} wrap>
              <Avatar 
              size="large"
                style={{ backgroundColor: "white",color:"greenyellow"}}
                icon={<UserOutlined />}
              />
            </Space>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
