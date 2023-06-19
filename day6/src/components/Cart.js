import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, delUser } from "../features/CartSlice";
import "../styles/cart.css";
import { Button, Form, Input, Select } from "antd";
import { DatePicker, Space } from "antd";
import { data } from "../store/Data";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import img from "../assets/img.jpg";

export function Cart() {
  console.log(data);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [to, setTo] = useState(0);
  const [date, setDate] = useState("");

  const onTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onDes = (e) => {
    console.log(e.target.value);
    setDes(e.target.value);
  };

  const onTo = (e) => {
    console.log(e);
    setTo(e);
  };

  const onDate = (e) => {
    // setDate(e);
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const add = () => {
    dispatch(addUser("data"));
  };

  const del = () => {
    dispatch(delUser());
  };

  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const assign = () => {
    console.log("clicked", title, des, to, date);
    if (title !== "" && des !== "" && to !== 0) {
      console.log("clickedin");
      dispatch(addUser({ title: title, des: des, to: to, date: date }));
    }
  };

  const [form] = Form.useForm();

  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <div className="topDiv">
          <Form
            className="inputs"
            {...layout}
            form={form}
            name="control-hooks"
            style={{ maxWidth: 600, marginTop: 30 }}
          >
            <Form.Item
              className="width"
              name="website"
              label="Title"
              rules={[{ required: true }]}
            >
              <Input onChange={onTitle} />
            </Form.Item>
            <Form.Item
              className="width"
              name="note"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input onChange={onDes} />
            </Form.Item>

            <Form.Item
              className="width"
              name="gender"
              label="Assign to :"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select" onChange={onTo} allowClear>
                {data.map((e) => {
                  return <Option value={e.id}>{e.nam}</Option>;
                })}
                {/*                 
                <Option value="female">xyz</Option>
                <Option value="other">xyz</Option> */}
              </Select>
            </Form.Item>

            <Space
              direction="vertical"
              style={{ marginLeft: 30 }}
              className="width"
            >
              <DatePicker onChange={onDate} style={{ width: "65%" }} />
            </Space>

            <Form.Item {...tailLayout} style={{ marginRight: "120px" }}>
              <Button
                onClick={assign}
                type="primary"
                htmlType="submit"
                className="width"
                style={{ marginTop: 20 }}
              >
                Assign
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="bottomDiv">
          <div className="header">
            {data.map((e) => {
              let c = 0;

              {
                cart.map((cart, key) => {
                  if (cart.to == e.id) c++;
                });
              }

              return (
                <Space size="middle" style={{ marginTop: 3 }}>
                  <Badge count={c}>
                    <Avatar
                      shape="square"
                      size="large"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                      }}
                    />
                  </Badge>
                </Space>
              );
            })}
          </div>
          <div>
            {cart.map((cart, key) => (
              <div key={key}>
                title: {cart.title} Description: {cart.des} Assigned to:
                {cart.to} date :{cart.date} fsdfdfsa
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
