import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function ExerciseList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      <h1>Exercise List</h1>
      <Link to="/todo" id="link">Go to Todo List</Link>
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

export default ExerciseList;
