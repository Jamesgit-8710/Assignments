import React, { useState } from 'react'
import '../styles/player.css'
import calm from '../assets/Calm-Down.mp3'
import { Howl } from 'howler'
import newObj from '../store/data'

function Player({passImg,passTitle,id}) {

    const play="fa-solid fa-play"
    const pause="fa-solid fa-pause"

    const sound = new Howl({src:"https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1.mp3"})

    const [icon,setIcon] = useState("fa-solid fa-play")
    const [s,setS] = useState("https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1.mp3")

    // const p = (()=> {

    // })

    let audio = new Audio("https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1.mp3");
    //audio.play();

    const click = (()=>{
        if(icon==="fa-solid fa-play"){
            setIcon(pause)
            sound.play();
        }else{
            setIcon(play)
            sound.pause();
        }
    })
  return (
    <div className='player'>
        <img src={passImg} className='playerImg'/>
        <h3 className='songName'>{passTitle}</h3>
        <div className='outerDiv'>
            <div className='innerDiv'></div>
        </div>
        <div className='play'>
            <i class="fa-solid fa-backward"/>
            <i class={icon} onClick={click}/>
            <i class="fa-solid fa-forward"/>
        </div>
    </div>
  )
}

export default Player