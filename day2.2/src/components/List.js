import React from 'react'
import Item from './Item';

function List({i,setDel,setCom,set}) {

  // const [delArr, setDelArr] = useState([]);
  // const [comArr, setComArr] = useState([]);

  const setDelArr = (e) => {
    setDel(e)
  }

  const setComArr = (e) => {
    setCom(e)
  }

  // const setf = (e) => {
  //   set(e)
  // }
    
  return (
    <div>
        {i.map((e) => {
            return <Item title={e} setDel={setDelArr} setCom={setComArr} />
        })}
    </div>
  )
}

export default List