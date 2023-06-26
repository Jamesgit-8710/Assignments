import React from 'react'
import '../styles/list.css'
import { Input } from 'antd';
import Tile from './Tile';

function List() {
  return (
    <div className='list'>
        <div className='center' style={{padding: "20px 30px",backgroundColor: "#E2EEF7"}}>
        <Input placeholder="Search..." style={{borderRadius: "100px",height: "35px"}}/>
        </div>
        <div className='friendList'>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
    </div>
  )
}

export default List