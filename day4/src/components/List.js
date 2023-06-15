import React from "react";
import dark from "../assets/cloud.png";
import { Card } from "antd";
import '../styles/list.css'

const { Meta } = Card;

function List() {
  return (
    <div className="list">
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 60 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="35 C" description="6:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="24 C" description="7:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="35 C" description="6:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="24 C" description="7:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="35 C" description="6:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="24 C" description="7:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="35 C" description="6:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="24 C" description="7:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="35 C" description="6:00" />
        </Card>
      </div>
      <div>
        <Card className="dayCard"
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={dark}
            />
          }
        >
          <Meta title="24 C" description="7:00" />
        </Card>
      </div>
    </div>
  );
}

export default List;
