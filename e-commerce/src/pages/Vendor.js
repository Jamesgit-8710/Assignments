import React, { useState } from 'react'
import '../styles/vendor.css'
import { Button } from 'antd';

const Vendor = () => {
    const [size, setSize] = useState('large')
  return (
    <div className='vendorBackground'>
        <div style={{backgroundColor: "#000a30",padding: "20px 40px",display: "flex", justifyContent: "space-between"}}>
            <h2 style={{color: "white", fontWeight: 500}}>Vendor Panel</h2>
            <div>
            <Button size={size} style={{backgroundColor: "#000a30",border: "1px solid white", color: "white"}} >Add Product</Button>
            </div>
        </div>
    </div>
  )
}

export default Vendor