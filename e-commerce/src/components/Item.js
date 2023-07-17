import React, { useEffect, useState } from 'react'
import IncDecCounter from './IncDecCounter'
import { Button, message } from 'antd'
import img from '../assets/iphone.jpg'
import axios from 'axios'

const Item = ({ item, awoke, show }) => {

    const id = localStorage.getItem('id');

    const [data, setData] = useState([{ price: 0, images: [] }]);

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

    const cancel = async() => {
        const res = await axios.post("http://localhost:8000/updateOrder", { id: item._id, data: 'c' });
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
                <div style={{ height: 150, width: 130, backgroundImage: `url('${data[0].images[0]}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontSize: 20 }}>{data[0]?.productName}</p>
                    <p style={{ color: "rgb(180, 180, 180)" }}>{data[0]?.des}</p>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 10 }}>
                        &#8377;{data[0]?.price}
                    </p>
                    {
                        !show ?
                        <h5>{item.count} Pcs</h5>
                        : ""
                    }
                    <div style={{ display: show ? "flex" : "none" }}>
                        <IncDecCounter n={item.count} qty={data[0]?.qty} set={setVal} itemId={item.itemId} awoke={awoke} />
                        <Button type="primary" style={{ marginTop: 32, marginLeft: 40 }} onClick={rmv} danger ghost>
                            Remove
                        </Button>
                    </div>
                    <div style={{ display: show ? "none" : "flex" }}>
                        {
                            item.status==='d' ? 
                            <>
                        <Button type="primary" style={{ marginTop: 32, width: 150 }} onClick={cancel} danger ghost>
                            Cancel order
                        </Button>
                        <Button type="primary" style={{ width: 150, marginTop: 32, marginLeft: 40 }} ghost>
                            Track order
                        </Button>
                        </>
                        : item.status==='c' ? 
                        <p style={{color: "red", borderRadius: 5, marginTop: 20,fontSize: 20}}>Canceled</p>
                        : <p style={{color: "rgb(93, 109, 255)", borderRadius: 5, marginTop: 20,fontSize: 20}}>Delivered</p>
                        }
                        
                        
                    </div>
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