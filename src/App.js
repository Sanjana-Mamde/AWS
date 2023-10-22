import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/todoinput'

import Todolist from './components/todolist';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key) => {
    // Create a new array with the item removed
    const newListTodo = listTodo.filter((_, index) => index !== key);
    setListTodo(newListTodo);
  }
  
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App