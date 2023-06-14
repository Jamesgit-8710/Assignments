import React, { useState } from 'react'
import Player from './Player'
import List from './List'
import '../styles/main.css'
import image from '../assets/d.png'


function Main() {

    const [img,setImg] = useState(image)
    const [title,setTitle] = useState("No found")
    const [index,setIndex] = useState(0)

    const si = ((e) =>{
        setImg(e)
    })

    const st = ((e) =>{
        setTitle(e)
    })

    const s = ((e) =>{
        setIndex(e)
        console.log(e)
    })
    
  return (
    <div className='main'>
        <Player passImg={img} passTitle={title} id={1}/>
        <List setImg={si} setTitle={st} setIndex={s}/>
    </div>
  )
}

export default Main