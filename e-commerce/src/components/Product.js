import React, { useState } from "react";
import { Button, Card, Form, Input, Modal, Select, Upload } from "antd";
import iphone from "../assets/iphone.jpg";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import "../styles/product.css";
import axios from "axios";
import { message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Product = ({ item, show }) => {
  const size = "large";
  const key = "updatable";
  const [messageApi, contextHolder] = message.useMessage();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [stat, setStat] = useState("")

  const [open, setOpen] = useState(false);

  const handleOk = async () => {
    const res = await axios.post("http://localhost:8000/update", {
      id: item._id,
      data: { productName: name, price: price, des: des, qty: qty, cat: cat },
    });
    messageApi.open({
      key,
      type: "success",
      content: "Item updated!",
      duration: 2,
    });
    setOpen(false);
  };

  const handleOk2 = async () => {
    const res = await axios.post("http://localhost:8000/update", {
      id: item._id,
      data: { status: 'p' },
    });
    messageApi.open({
      key,
      type: "success",
      content: "Item Published!",
      duration: 2,
    });
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const rmv = () => {
    const res = axios.post("http://localhost:8000/delete", { id: item._id });
    messageApi.open({
      key,
      type: "success",
      content: "Item deleted!",
      duration: 2,
    });
  };

  const showModal = () => {
    setName(item.productName);
    setPrice(item.price);
    setQty(item.qty);
    setDes(item.des);
    setCat(item.cat);
    setStat(item.status);
    setOpen(true);
  };

  return (
    <div style={{ padding: 15 }}>
      {contextHolder}
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<img alt="example" src={iphone} height={300} />}
      >
        <Meta title={item.productName} description={item.des} />
        <p style={{ fontWeight: 500, fontSize: 20, marginTop: 10 }}>
          &#8377;{item.price}
        </p>

        <div
          style={{
            justifyContent: "space-between",
            display: !show ? "flex" : "none",
            width: "100%",
          }}
        >
          <Button
            size={size}
            style={{ marginTop: 10 }}
            onClick={() => {
              showModal();
            }}
          >
            <img src={edit} height={15} style={{ marginRight: 5 }} />
            Edit
          </Button>
          <Button size={size} style={{ marginTop: 10 }} onClick={rmv} danger>
            <img src={del} height={15} style={{ marginRight: 5 }} />
            Delete
          </Button>
        </div>

        <Button
          size={size}
          style={{
            marginTop: 10,
            width: "100%",
            display: show ? "block" : "none",
          }}
        >
          Add to Cart
        </Button>
      </Card>

      <Modal
        title="Update Product"
        open={open}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{ top: "10vh" }}
        footer={[
          <Button
            onClick={handleOk}
          >
            Update
          </Button>,
          stat==='d' ?
          <Button
            key="submit"
            type="primary"
            onClick={handleOk2}
          >
            Publish
          </Button> : "",
        ]}
      >
        <Form>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
            initialValue={name}
          >
            <Input
              placeholder="Product name"
              style={{ marginTop: 20 }}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[{ required: true, message: "Please input product price!" }]}
            initialValue={price}
          >
            <Input
              placeholder="Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="qty"
            rules={[{ required: true, message: "Please input quantity!" }]}
            initialValue={qty}
          >
            <Input
              placeholder="Qty"
              type="number"
              onChange={(e) => setQty(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="cat"
            rules={[{ required: true, message: "Please select the category!" }]}
            initialValue={cat}
          >
            <Select
              placeholder="Category"
              onChange={(e) => {
                setCat(e);
              }}
            >
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo2">df</Select.Option>
              <Select.Option value="demo3">Dfasemo</Select.Option>
              <Select.Option value="demo4">Demfasfo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="des"
            rules={[{ required: true, message: "Please input description!" }]}
            initialValue={item.des}
          >
            <TextArea
              rows={4}
              placeholder="Description"
              // onChange={(e) => setDes2(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 4 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Product;
