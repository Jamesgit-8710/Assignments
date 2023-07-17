import React, { useState } from 'react'
import { Button, Steps } from 'antd';
import iphone from '../assets/iphone.jpg'

const OrderCard = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const description = <p style={{ opacity: 0 }}>content</p>;
    return (
        <div style={{ height: 297, width: "45%", backgroundColor: "white", display: "flex", margin: "20px auto" ,padding: 10,borderRadius: 20}}>
            <div style={{ height: "100%", width: "100%", display: "flex",marginRight: 60,borderRight: "1px solid rgb(241, 243, 245)"}}>
                {/* <div style={{ backgroundImage: `url(${iphone})`, height: "100%", width: 270, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div> */}
                <div style={{ paddingLeft: 20 }}>
                    <p style={{ fontSize: 35, fontWeight: 500}}>I Phone6</p>
                    <p style={{ color: "rgb(180, 180, 180)", fontSize: 20 }}>New Arrivals</p>
                    <p style={{ fontWeight: 500, fontSize: 30, marginTop: 25 }}>
                        &#8377;10000
                    </p>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 5 }}>
                        5 Pcs
                    </p>
                    <Button type="primary" style={{ marginTop: 75, height: 40, width: 200 }} danger ghost>
                        Cancel order
                    </Button>
                </div>
            </div>
            <div style={{ width: "400px" }}>
                <Steps
                    current={current}
                    onChange={onChange}
                    direction="vertical"
                    items={[
                        {
                            title: 'Preparing for dispatch',
                            description,
                        },
                        {
                            title: 'Order dispatched',
                            description,
                        },
                        {
                            title: 'On the way',
                            description,
                        }, {
                            title: 'Arrive today',
                            description,
                        }, {
                            title: 'Delivered',
                            description,
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default OrderCard