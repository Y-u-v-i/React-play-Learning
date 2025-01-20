import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function ExerciseList({ todos, toggleComplete, deleteTodo}) {
  const [filter, setFilter] = useState('all'); 
  const[selected,setselected]=useState('one')
  const filteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div>
      <h1>Exercise List</h1>
      <Link to="/todo" id="link">Go to Todo List</Link>
      <ul id='span'>
        {filteredTodos().map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none', backgroundColor: todo.completed ? 'rgb(215, 73, 63)' : 'rgb(42, 159, 231)', color: todo.completed ? 'white' : 'whitesmoke' }}>
            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button id="close" onClick={() => deleteTodo(index)}>&#10006;</button>
          </li>
        ))}
      </ul>
      <div id='space'>
          <span style={{marginRight:'10px',color:'white'}}>{activeCount} active items</span>
          <button id={ selected ==='two' ?'active': 'button' } style={{marginRight:'10px'}} onClick={() => {setFilter('all');setselected('two')}}>All</button>
          <button id={ selected ==='three' ?'active': 'button' } style={{marginRight:'10px'}} onClick={() => {setFilter('active');setselected('three')}}>Active</button>
          <button id={ selected ==='four' ?'active': 'button' } style={{marginRight:'10px'}} onClick={() => {setFilter('completed');setselected('four')}}>Completed</button>
      </div>
    </div>
  );
}

export default ExerciseList;
