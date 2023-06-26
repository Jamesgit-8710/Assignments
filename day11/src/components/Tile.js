import React, { useState } from 'react'
import '../styles/tile.css'
import Pic from './Pic'
import man from '../assets/man.png'

function Tile() {
  const [val ,setVal] = useState(0);
  return (
    <div className={`tile center ${val ? 'act' : ''}`} onClick={()=>{setVal(1)}}>
        <div className='inner center'>
            <Pic img={man}/>
            <div className='innerRight'>
                <div className='NT center'>
                    <h4>Khao Tank</h4>
                    <p style={{fontSize: 12,color: "#AAB8C2"}}>12:50 AM</p>
                </div>
                <p style={{fontSize: 14,color: "#617481"}}>Firebase applicatioin</p>
            </div>
        </div>
    </div>
  )
}

export default Tile