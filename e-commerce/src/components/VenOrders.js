import React from 'react'
import OrderCard from './OrderCard'

const VenOrders = () => {
  return (
    <div style={{height: "calc(100vh - 80px)", width: "100vw", backgroundColor: "",overflow: "scroll",display: "flex",flexWrap: "wrap"}} className='cart'>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
    </div>
  )
}

export default VenOrders