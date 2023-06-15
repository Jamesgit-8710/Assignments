import React, { useState, useEffect } from "react";
import { Image } from "antd";
import img from "../assets/cloud.png";
import rec from "../assets/rec.png";
import { Typography } from "antd";
import "../styles/mainBody.css";
import axios from "axios";

const whether =
  "https://api.tomorrow.io/v4/timelines?location=30.7049,76.7173&fields=temperature&timesteps=1h&units=metric&apikey=pXCdNfncwqEco07ak4kN7xzVPNm0pcNs";
const { Title } = Typography;

function MainBody() {
    // const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //   const getGiHubUserWithAxios = async () => {
    //       const response = await axios.get(whether);
    //       setUserData(response.data.data.timelines[0]);
    //       console.log(response.data.data.timelines[0])
    //     };
      
    //   getGiHubUserWithAxios();
    // }, []);
  
  
  return (
    <div className="mainBody">
      <Image preview={{ visible: false }} height={250} src={img} />
      <Title className="temp">35</Title>
      <Image preview={{ visible: false }} width={40} src={rec} />
    </div>
  );
}

export default MainBody;
