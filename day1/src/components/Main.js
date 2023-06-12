import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import "../styles/main.css";
import data from "../data/products.json";

const Main = (props) => {
    console.log(props.data)
    console.log(props.data)

    const [item,setItem] = useState(props.data);
    
    const f = data.filter((data) => {
        return data.title.toLowerCase().includes(item.toLowerCase());
    })
    

  return (
    <div>
      {/* <Navbar />, */}
      {data.products.map((e) => {
        return <Product title={e.title} price={e.price} thumbnail={e.thumbnail}/>
      })} 
    </div>
  );
};

export default Main;
