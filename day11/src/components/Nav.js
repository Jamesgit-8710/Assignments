import React from 'react'
import '../styles/nav.css'
import man from '../assets/man.png'
import logout from '../assets/logout.png'
import Pic from './Pic'
import { useDispatch } from 'react-redux'
import { del } from '../slices/user.slice'

function Nav() {
  const dispatch = useDispatch();
  return (
    <div className='sideBar'>
        <div className='top center'>
            <Pic img={man}/>
        </div>
        <div className='mid'>

        </div>
        <div className='bottom center' onClick={()=> {dispatch(del())}}>
            <img src={logout} alt='logout' height={20} />
        </div>
    </div>
  )
}

export default Nav