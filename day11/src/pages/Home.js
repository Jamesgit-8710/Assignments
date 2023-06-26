import React from 'react'
import Nav from '../components/Nav'
import List from '../components/List'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className='home center'>
        <div className='main'>
            <Nav/>
            <List/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home