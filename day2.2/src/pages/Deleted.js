import React from 'react'
import { useParams } from 'react-router-dom'

function Deleted() {
  const {task} = useParams();
  const arr = JSON.parse(task)
  return (
    <>
    <div>Deleted</div>
    {arr.map((e) => {
        return <div>{e}</div>
    })}
    </>
  )
}

export default Deleted