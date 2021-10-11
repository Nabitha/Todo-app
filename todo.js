import React from 'react';
import {useState} from 'react'
function ToDo() {
  const [toDos,setToDos]= useState([])
  const [toDo,setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo App
        </h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's Sunday </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)}type="text" placeholder=" Add item..." />
       
      </div>
      </div>
     
export default ToDo
