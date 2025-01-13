import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Todo({ todos, addTodo, toggleComplete, deleteTodo }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
      navigate('/');
    }
  };

  return (
    <div className="Todo">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button id='but' onClick={handleAddTodo}>Add</button>
      <ul id='span'>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none', backgroundColor: todo.completed ? 'rgb(215, 73, 63)' : 'rgb(42, 159, 231)', color: todo.completed ? 'white' : 'whitesmoke' }}>
            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button id="close" onClick={() => deleteTodo(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;