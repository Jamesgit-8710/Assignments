import React from "react";
import "../styles/item.css"

function Item({title,setDel,setCom}) {

  // const [val, set] = useState("");

  // const updateVal = (e) => {
    
  // }

  // const [delArr, setDel] = useState([]);
  // const [comArr, setCom] = useState([]);

  const deletedArr = () => {
    setDel(title)
    //set(title)
    console.log(title)
  }

  const completedArr = () => {
    setCom(title)
    console.log(title)
  }

  return (
    <div>
      <p className="todo">{title}</p>
      <button className="todo" onClick={completedArr}>completed</button>
      <button className="todo" onClick={deletedArr}>deleted</button>
    </div>
  )
}

export default Item