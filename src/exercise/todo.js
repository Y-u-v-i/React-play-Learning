import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Todo({ addTodo }) {
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
    </div>
  );
}

export default Todo;