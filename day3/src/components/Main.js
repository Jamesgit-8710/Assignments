import React, { useState } from 'react'
import Player from './Player'
import List from './List'
import '../styles/main.css'
import image from '../assets/d.png'
import newObj from '../store/data'

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
        //console.log(e)
    })

    const ff = (()=> {
        //console.log(x)
        if(index==newObj.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    })

    const bb = (()=> {
        //console.log(x)
        if(index==0){
            setIndex(newObj.length-1)
        }else{
            setIndex(index-1)  
        }
    })
    
  return (
    <div className='main'>
        <Player passImg={img} passTitle={title} id={index} bb={bb} ff={ff}/>
        <List setImg={si} setTitle={st} setIndex={s}/>
    </div>
  )
}

export default Main