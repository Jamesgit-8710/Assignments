import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Filters({delArr,comArr}) {
  
  return (
    <>
    <div>
        <button >
          <Link to={`/deleted/${JSON.stringify(delArr)}`}>
            Deleted Items
          </Link>
        </button>
        <button >
          <Link to={`/completed/${JSON.stringify(comArr)}`}>
          Selected Items
          </Link>
        </button>
    </div>
    <Outlet />
    </>
  )
}

export default Filters