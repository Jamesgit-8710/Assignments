import React from 'react'
import '../styles/song.css'

function Song({imgUrl,title,sr,setImg,setTitle,setIndex}) {
    const play = (()=>{
        const audio = new Audio(sr);
        console.log(sr,audio)
        audio.play();
        setImg(imgUrl)
        setTitle(title)
        setIndex()
    })
  return (
    <div className='song'>
        <img src={imgUrl} height={40} width={40} className='smallImg'/>
        <h3 className='songTitle'>{title}</h3>
        <i class="fa-solid fa-play play2" onClick={play}/>
    </div>
  )
}

export default Song