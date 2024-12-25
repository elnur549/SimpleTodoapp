import React, { useState,useRef } from 'react'
import {v4 as uuidv4} from "uuid"
const Todos = ({addTodo}) => {
  const [value,setValue]=useState("")
  const inputRef=useRef()
  const handleclick =()=>{
    addTodo({
      id:uuidv4(),
      name:value,
      status:false,
    })
    setValue("")
    inputRef.current.focus();
  }
  return (
    <div className='todoField'>
      <input ref={inputRef} value={value} onChange={(e)=>setValue(e.target.value)} type="text" className="todoField_input" />
      <button className='todoField_btn' onClick={()=>handleclick()} >Add</button>
    </div>
  )
}

export default Todos
