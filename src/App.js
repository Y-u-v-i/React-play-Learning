import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './exercise/todo';
import ExerciseList from './exercise/ExerciseList'; 
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((v, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/todo" element={<Todo todos={todos} addTodo={addTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />} />
          <Route path="/" element={<ExerciseList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;