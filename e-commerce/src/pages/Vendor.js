import React, { useEffect, useState } from "react";
import "../styles/vendor.css";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Select, Upload, message } from "antd";
import axios from "axios";
import Product from "../components/Product";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Vendor = () => {
  const [loading, setLoading] = useState(false);

  const id = localStorage.getItem("id");

  const [messageApi, contextHolder] = message.useMessage();

  const key = "updatable";

  const size = "large";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]);

  const { TextArea } = Input;

  const [val, setVal] = useState("Published");
  const [val2, setVal2] = useState("p");

  const onClick = ({ key }) => {
    if (key === "1"){ setVal("Published"); setVal2('p')}
    else if (key === "2"){ setVal("Draft"); setVal2('d')}
  };

  const items = [
    {
      label: "Published",
      key: "1",
    },
    {
      label: "Draft",
      key: "2",
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel2 = () => setPreviewOpen(false);

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

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (name !== "" && price !== "" && qty !== "" && des !== "" && cat !== "") {
      const res = axios.post("http://localhost:8000/addProduct", {
        name: name,
        price: price,
        qty: qty,
        des: des,
        cat: cat,
        uploadedBy: id,
        status: "p",
      });
      messageApi.open({
        key,
        type: "success",
        content: "Uploaded!",
        duration: 2,
      });
      setOpen(false);
    } else {
      messageApi.open({
        key,
        type: "warning",
        content: "feilds are empty!",
        duration: 2,
      });
    }

    // setConfirmLoading(true);
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
  };

  const handleOk2 = () => {
    if (name !== "" && price !== "" && qty !== "" && des !== "" && cat !== "") {
      const res = axios.post("http://localhost:8000/addProduct", {
        name: name,
        price: price,
        qty: qty,
        des: des,
        cat: cat,
        uploadedBy: id,
        status: "d",
      });
      messageApi.open({
        key,
        type: "success",
        content: "Uploaded!",
        duration: 2,
      });
      setOpen(false);
    } else {
      messageApi.open({
        key,
        type: "warning",
        content: "feilds are empty!",
        duration: 2,
      });
    }

  };

  const handleCancel = () => {
    setOpen(false);
  }

  const call = () => {
    console.log("first");
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.post("http://localhost:8000/getProduct");
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <div className="vendorBackground">
      {contextHolder}
      <div
        style={{
          backgroundColor: "#000a30",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "white", fontWeight: 500 }}>Vendor Panel</h2>
        <Dropdown menu={{ items, onClick }}>
          <Button style={{ marginTop: 4 }}>
            <Space>
              {val}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <div style={{ display: "flex", color: "white" }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              marginTop: 5,
              marginRight: 60,
              cursor: "pointer",
            }}
          >
            Orders
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              marginTop: 5,
              marginRight: 60,
              cursor: "pointer",
            }}
          >
            History
          </p>
          <Button
            size={size}
            style={{
              backgroundColor: "#000a30",
              border: "1px solid white",
              color: "white",
            }}
            onClick={showModal}
          >
            Add Product
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "rgb(241, 243, 245)",
        }}
      >
        {data.map((i,index) => {
          if (i.uploadedBy === id && i.status === val2)
            return <Product item={i} show={false}/>;
        })}
      </div>
      <Modal
        title="Add Product"
        open={open}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{ top: "10vh" }}
        footer={[
          <Button key="back" onClick={handleOk2}>
            Save as Draft
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add item
          </Button>,
        ]}
      >
        <Form onFinish={call}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input
              placeholder="Product name"
              style={{ marginTop: 20 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="price"
            rules={[{ required: true, message: "Please input product price!" }]}
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
          >
            <TextArea
              rows={4}
              placeholder="Description"
              onChange={(e) => setDes(e.target.value)}
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
              onCancel={handleCancel2}
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

export default Vendor;
