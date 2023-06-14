import React from 'react'
import Song from './Song'
import '../styles/list.css'
import obj from '../store/data'

function List({setImg,setTitle,setIndex}) {
    const setI = ((e)=>{
        setImg(e)
    })
    const setT = ((e)=>{
        setTitle(e)
    })
    const setIn = ((e)=>{
        setIndex(e)
    })
  return (
    <div className='list'>
        {obj.map((e,index)=>{
            return <Song imgUrl={e.imgurl} title={e.title} sr={e.src}  setImg={setI} setTitle={setT} setIndex={setIn} index={index}/>
        })}
    </div>
  )
}

export default List