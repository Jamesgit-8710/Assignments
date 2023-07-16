import React, { useEffect, useState } from 'react'
import IncDecCounter from './IncDecCounter'
import Item from './Item'
import axios from 'axios';
import { Button } from 'antd';

const Cart = () => {

    const id = localStorage.getItem('id');
    const [data, setData] = useState([]);

    const [amount, setAmount] = useState(0)

    // const call = () => {}

    useEffect(() => {
        const call = async() => {
            const res = await axios.post("http://localhost:8000/cartData", { id: id});

            setData(res.data);

            // const res2 = await axios.post("http://localhost:8000/product", { id: res.data.});

        }

        call();
    },[])

    return (
        <div style={{height: "calc(100vh - 216px)", width: "50vw", backgroundColor: "white", margin: "auto", padding: "20px 40px 120px 40px", overflow: "scroll", borderTop: "1px solid rgb(241, 243, 245)" }} className='cart'>
            <p style={{ fontSize: 25, fontWeight: 500, marginBottom: 40 }}>Shopping Cart</p>

            {
                data.map((i) => {
                    return <Item item={i}/>
                })
            }

            <div style={{width: "50vw",backgroundColor: "white",position: "absolute",bottom: 0,display: "flex",justifyContent: "space-between",padding: "20px 0px",borderTop: "1px solid rgb(241, 243, 245)"}}>
                <p style={{fontSize: 23,fontWeight: 500}}>Total Amount: &#8377;{amount}</p>
                <Button type='primary' size='large'>Place order</Button>
            </div>
            
        </div>
    )
}

export default Cart