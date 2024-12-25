
import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodosField from './components/TodosField';

function App() {
  const [todos,setTodos] = useState([
    {
    "id":1,
    "name":"Lenovo",
    "status":false
  },
  {
    "id": 2,
    "name": "Samsung",
    "status": true
  },
  {
    "id": 3,
    "name": "Casper",
    "status": false
  },
  {
    "id": 4,
    "name": "Huawei",
    "status": true
  },

]);
const addTodo = (todo)=>{
    if(todo.name){
      setTodos([...todos,todo])
   
    }
}
 
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

const doneTodo = (id)=>{
  let currentTodo = todos.find(todo=>todo.id===id)
  currentTodo.status=!currentTodo.status;
  setTodos([...todos])
}
  return (
    <div className="app">
     <h1>Todos</h1>
     <TodosField addTodo={addTodo}/>
     <Todos todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
    </div>
  );
}

export default App;
