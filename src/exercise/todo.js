import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Todo({ addExercise, exercises }) {
  const [inputValue, setInputValue] = useState('');
  const [matchedExercise, setMatchedExercise] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const foundExercise = exercises.find(exercise => exercise.exerciseName.toLowerCase() === value.toLowerCase());
    setMatchedExercise(foundExercise || null);
  };

  const handleAddExercise = () => {
    if (inputValue.trim() !== '' && !matchedExercise) {
      const newExercise = {
        exerciseName: inputValue,
        path: `/${inputValue.toLowerCase().replace(/\s+/g, '-')}`,
        image: 'https://static.vecteezy.com/system/resources/previews/026/162/009/original/to-do-list-icon-with-hand-drawn-text-checklist-task-list-illustration-in-flat-style-on-white-background-vector.jpg'
      };
      addExercise(newExercise);
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
        placeholder="Add a new exercise"
      />
      <button className='but' onClick={handleAddExercise}>Add</button>

      {matchedExercise && (
        <div className="matched-exercise">
          <h2>Matched Exercise:</h2>
          <img src={matchedExercise.image} alt={matchedExercise.exerciseName} />
          <h3>{matchedExercise.exerciseName}</h3>
        </div>
      )}
    </div>
  );
}

export default Todo;