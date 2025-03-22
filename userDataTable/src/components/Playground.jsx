import React from 'react'
import AddUsers from './AddUsers'
import ViewUsers from './ViewUsers'
import { useState } from "react";

const Playground = () => {
    let [users,setUsers] = useState([]);
  return (
    <div className='playground'>
      <AddUsers setUsers={setUsers} users={users}/>
      <ViewUsers users={users}/>
    </div>
  )
}

export default Playground
