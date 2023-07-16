import React, { useEffect, useState } from 'react'
import IncDecCounter from './IncDecCounter'
import { Button, message } from 'antd'
import img from '../assets/iphone.jpg'
import axios from 'axios'

const Item = ({ item }) => {

    const id = localStorage.getItem('id');

    const [data, setData] = useState([{ price: 0 }]);

    const [val, setVal] = useState(1)

    const [messageApi, contextHolder] = message.useMessage();

    const key = "updatable";

    const rmv = async () => {
        const res = await axios.post("http://localhost:8000/deleteItem", { id: id, itemId: item.itemId });

        messageApi.open({
            key,
            type: "success",
            content: "Removed!",
            duration: 2,
        });
    }

    useEffect(() => {
        const call = async () => {
            const res = await axios.post("http://localhost:8000/product", { id: item.itemId });

            setData(res.data);

        }

        call();

    }, [])

    return (
        <div style={{ width: "calc(100% - 40px)", padding: 20, borderRadius: 10, border: "1px solid rgb(241, 243, 245)", marginTop: 10 }}>
            {contextHolder}
            <div style={{ display: "flex" }}>
                <div style={{ height: 150, width: 130, backgroundImage: `url(${img})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontSize: 20 }}>{data[0]?.productName}</p>
                    <p style={{ color: "rgb(180, 180, 180)" }}>{data[0]?.des}</p>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 10 }}>
                        &#8377;{data[0]?.price}
                    </p>
                    <IncDecCounter n={item.count} qty={data[0]?.qty} set={setVal} itemId={item.itemId} />
                    <Button type="primary" style={{ marginLeft: 40 }} onClick={rmv} danger ghost>
                        Remove
                    </Button>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgb(241, 243, 245)", marginTop: 15 }}>
                <p style={{ fontWeight: 500, fontSize: 20, marginTop: 10 }}>
                    Amount
                </p>
                <p style={{ fontWeight: 500, fontSize: 20, marginTop: 10 }}>
                    &#8377;{data[0]?.price * val}
                </p>
            </div>
        </div>
    )
}

export default Item