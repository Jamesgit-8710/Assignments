import React from "react";
import { Card } from 'antd';
import iphone from '../assets/iphone.jpg'
import '../styles/product.css'

const { Meta } = Card;

const Product = ({item}) => {
  return (
    <div style={{padding: 15}}>
      <Card
        hoverable
        style={{ width: 280 }}
        cover={
          <img
            alt="example"
            src={iphone}
            height={300}
          />
        }
      >
        <Meta title={item.productName} description={item.des} />
        <p style={{fontWeight: 500, fontSize: 20,marginTop: 10}}>&#8377;{item.price}</p>
      </Card>
    </div>
  );
};

export default Product;
