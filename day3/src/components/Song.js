import React from 'react'
import '../styles/song.css'

function Song({imgUrl,title,sr,setIndex,index}) {
    const p = (()=>{
        const audio = new Audio(sr);
        audio.play();
        
        setIndex(index)
    })
  return (
    <div className='song'>
        <img src={imgUrl} height={40} width={40} className='smallImg' alt="img"/>
        <h3 className='songTitle'>{title}</h3>
        <i class="fa-solid fa-play play2" onClick={p}/>
    </div>
  )
}

export default Song