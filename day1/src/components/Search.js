import React, { useState } from 'react'
import '../styles/search.css'
import Main from './Main';

function Search() {

    const [item ,updated]=useState("");

    const filtering = (e) => {
        updated(e.target.value)
    }

  return (
    <>
        <input className='search' type="text" id="search" name="search" onChange={filtering}/>
        <Main data={item}/>
    </>
  )
}

export default Search