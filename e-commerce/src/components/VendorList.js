import React from 'react'
import VendorCard from './VendorCard'

const VendorList = () => {
  return (
    <div style={{height: "calc(100vh - 68px)", width: "calc(100vw - 256px)", backgroundColor: "green"}}>
        <VendorCard/>
    </div>
  )
}

export default VendorList