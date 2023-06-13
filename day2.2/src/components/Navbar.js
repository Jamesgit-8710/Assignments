import { useState } from "react";
import '../styles/navbar.css'
import List from './List'
import Filters from './Filters'

function Navbar() {

    const [val, set] = useState("");
    const [items, setItem] = useState([]);
    //const [valF,valS] = useState([])

    const updateVal = (e) => {
        set(e.target.value)
    }

    const update = () => {
        setItem([...items,val])
    }

  const [delArr, setDelArr] = useState([]);
  const [comArr, setComArr] = useState([]);

  const setDel = (e) => {
    setDelArr([...delArr,e])
    items.filter((item) => item!==e) 
    console.log(delArr)
  }

  const setCom = (e) => {
    setComArr([...comArr,e])
    console.log(comArr)
  }

  return (
    <>
    <div>
        <input className='input' placeholder='Write Here...' onChange={updateVal}></input>
        <button onClick={update}>ADD</button>
    </div>
    <Filters delArr={delArr} comArr={comArr}/>
    <List i={items} setDel={setDel} setCom={setCom} />
    </>
  )
}

export default Navbar