import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../App.css'; 

function ExerciseList({ exercises, removeExercise }) { 
    return ( 
        <div> 
            <h1>Active works</h1> 
            <Link to="/todo" className="link">Add New Task</Link> 
            <div className="exercise-cards"> 
                {exercises.map((exercise, index) => ( 
                    <div key={index} className="exercise-card"> 
                        <img src={exercise.image} alt={exercise.exerciseName} /> 
                        <h2>{exercise.exerciseName}</h2> 
                        <button onClick={() => removeExercise(index)} className="close-button">X</button>
                    </div> 
                ))} 
            </div> 
        </div> 
    ); 
} 

export default ExerciseList;

