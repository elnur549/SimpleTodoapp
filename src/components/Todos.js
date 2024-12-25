/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Todos = (props) => {
  return (
    props.todos.length>0?(
        <ul className='todos'>
      {props.todos.map(todo=>(
        <li className="todos_item" key={todo.id}>
        <span className={todo.status?'todos_text todos_text_done':"todos_text"}>{todo.name}</span>
        <div className="todos_buttons">
            <button  onClick={()=>props.deleteTodo(todo.id)} >&#10060;</button>
            <button disabled={todo.status} onClick={()=>props.doneTodo(todo.id)}>&#9989;</button>
        </div>
      </li>
      ))}
    </ul>
    ):<p>No data</p>
  )
}

export default Todos
