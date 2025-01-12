import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { text: inputValue, completed: false };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((v, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
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
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none', backgroundColor:todo.completed?'rgb(215, 73, 63)':'rgb(42, 159, 231)',color: todo.completed? 'white':'whitesmoke'}}>
              <span onClick={() => handleToggleComplete(index)} style={{ cursor: 'pointer' }}>
                {todo.text}
              </span>
            <button id="close" onClick={() => handleDeleteTodo(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;