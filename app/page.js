'use client'
import React, { useState } from "react";
import "./style.css"; 
import CustomInput from "@/componenets/EnterKey";
import Button from "@/componenets/button";



function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      completed: false,
    };

    setList([...list, newTodo]);
    setInput("");
  };

  const toggleCompletion = (id) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setList(updatedList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>To-Do List</h1>
 
      <CustomInput onEnter={addTodo} /> 
      <div className="button-container">
  <Button onClick={() => alert('just a button XD')}>Click this button !!!!</Button>
            </div>

      

      {list.map((todo) => (
        <li
          key={todo.id}
         
        >
          {todo.todo}
          <button onClick={() => toggleCompletion(todo.id)}>
            {todo.completed ? "❌" : "✔"}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Remove</button>
          
        </li>
      ))}
    </div>
  );
}

export default App;
