import React, { useState } from "react";
import "../styles/home.css";
import logo from "../assets/shopify.png";
import { Input } from "antd";
import user from "../assets/user.png";
import bag from "../assets/bag.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Carousel } from "antd";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import box from '../assets/box.png';
import logout from '../assets/logout.png'
import vendor from '../assets/cashier.png'

const Home = () => {
  const [vis, setVis] = useState("none");

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <div className="homeBackground">
      <div className="navbar">
        <div style={{ display: "flex", width: "40%" }}>
          <img src={logo} height={33} alt="logo" />
          <h2 style={{ marginLeft: 8, fontSize: 24, color: "#000F43" }}>
            Shopcart
          </h2>
          <Input
            placeholder="Search Product"
            style={{
              width: "100%",
              marginLeft: 30,
              borderRadius: 50,
              height: 35,
              minWidth: "11rem",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space
                style={{
                  marginRight: 50,
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Category
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <p
            style={{
              marginRight: 50,
              fontSize: 15,
              fontWeight: 500,
              marginTop: 3,
              marginLeft: 5,
              cursor: "pointer",
            }}
          >
            Best sellers
          </p>
          <div
            style={{
              height: 25,
              width: 25,
              backgroundImage: `url(${bag})`,
              backgroundSize: "contain",
              borderRadius: 7,
              cursor: "pointer",
            }}
          ></div>
          <p
            style={{
              marginRight: 50,
              fontSize: 14,
              fontWeight: 500,
              marginTop: 3,
              marginLeft: 5,
              cursor: "pointer",
            }}
          >
            Cart
          </p>
          <div
            style={{
              height: 25,
              width: 25,
              backgroundImage: `url(${user})`,
              backgroundSize: "contain",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              setVis("block");
            }}
            
            onMouseLeave={() => {
              setVis("none");
            }}
          ></div>
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              marginTop: 3,
              marginLeft: 5,
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              setVis("block");
            }}
            onMouseLeave={() => {
              setVis("none");
            }}
          >
            Account
          </p>
        </div>
      </div>
      <div>
        <Carousel autoplay>
          <div>
            <div
              style={{
                height: "80vh",
                backgroundImage: `url(${t1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                height: "80vh",
                backgroundImage: `url(${t2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                height: "80vh",
                backgroundImage: `url(${t3})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                height: "80vh",
                backgroundImage: `url(${t4})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}
            ></div>
          </div>
        </Carousel>
      </div>
      <div
        style={{
          
          width: 150,
          backgroundColor: "white",
          display: vis,
          position: "absolute",
          top: 44,
          right: 35,
          borderRadius: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            fontSize: 14,
            padding: 10
        }}
        onMouseEnter={() => {
          setVis("block");
        }}
        
        onMouseLeave={() => {
          setVis("none");
        }}
      >
        <div style={{display: "flex", cursor: "pointer"}}>
          <img src={user} height={16}/>
          <p style={{marginLeft: 10}}>My Profile</p>
        </div>
        <div style={{display: "flex",marginTop: 15, cursor: "pointer"}}>
          <img src={box} height={16}/>
          <p style={{marginLeft: 10}}>Orders</p>
        </div>
        <div style={{display: "flex",marginTop: 15, cursor: "pointer"}}>
          <img src={vendor} height={20}/>
          <p style={{marginLeft: 10}}>Vendor</p>
        </div>
        <div style={{display: "flex",marginTop: 15, cursor: "pointer"}}>
          <img src={logout} height={18}/>
          <p style={{marginLeft: 10}}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
