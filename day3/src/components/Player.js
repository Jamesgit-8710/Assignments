import React, { useState } from 'react'
import '../styles/player.css'
import calm from '../assets/Calm-Down.mp3'
import { Howl } from 'howler'
import newObj from '../store/data'

function Player({passImg,passTitle,id,bb,ff}) {

    const play="fa-solid fa-play"
    const pause="fa-solid fa-pause"

    const sound = new Howl({src:"https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1.mp3"})

    const [icon,setIcon] = useState("fa-solid fa-play")
    const [s,setS] = useState("https://cdnsongs.com/music/data/Single_Track/201904/Viah-1/128/Viah_1.mp3")
    
    //const [x,y] = useState(id)


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

    const f = (()=> {

        //console.log(x)
        // if(x==newObj.length-1){
        //     y(0)
        // }else{
        //     y(x+1)
        // }
        ff()
    })

    const b = (()=> {
        //console.log(x)
        // if(x==0){
        //     y(newObj.length-1)
        // }else{
        //     y(x-1)  
        // }
        bb()
    })

  return (
    <div className='player'>
        <img src={newObj[id].imgurl} className='playerImg'/>
        <h3 className='songName'>{newObj[id].title}</h3>
        <div className='outerDiv'>
            <div className='innerDiv'></div>
        </div>
        <div className='play'>
            <i class="fa-solid fa-backward" onClick={b}/>
            <i class={icon} onClick={click}/>
            <i class="fa-solid fa-forward" onClick={f}/>
        </div>
    </div>
  )
}

export default Player