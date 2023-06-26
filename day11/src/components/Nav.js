import React from 'react'
import '../styles/nav.css'
import man from '../assets/man.png'
import logout from '../assets/logout.png'
import Pic from './Pic'

function Nav() {
  return (
    <div className='sideBar'>
        <div className='top center'>
            <Pic img={man}/>
        </div>
        <div className='mid'>

        </div>
        <div className='bottom center'>
            <img src={logout} alt='logout' height={20}/>
        </div>
    </div>
  )
}

export default Nav