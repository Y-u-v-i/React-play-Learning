import React from 'react'; 
import '../App.css'; 

function ExerciseList({ exercises, removeExercise }) { 
    return ( 
        <div> 
            <h1>Active works</h1> 
            <div className="exercise-cards"> 
                {exercises.map((exercise, index) => ( 
                    <div key={index} className="exercise-card"> 
                        <button onClick={() => removeExercise(index)} className="close-button">X</button>
                        <img src={exercise.image} alt={exercise.exerciseName} /> 
                        <h2>{exercise.exerciseName}</h2> 
                        <button onClick={() => window.location.href='/todo'} className="link">Go to To-do list</button>
                    </div> 
                ))} 
            </div> 
        </div> 
    ); 
} 

export default ExerciseList;