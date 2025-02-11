import React from 'react'; 
import '../App.css'; 

function ExerciseList({ exercises, removeExercise }) { 
    return ( 
        <div> 
            <h1>My Projects</h1> 
            <div className="exercise-cards"> 
                {exercises.map((exercise, index) => ( 
                    <div key={index} className="exercise-card"> 
                        <img src={exercise.image} alt={exercise.exerciseName} /> 
                        <h2>{exercise.exerciseName}</h2> 
                        {exercise.exerciseName ==='Todo List'?<button onClick={() => window.location.href='/todo'} className="link">Go to To-do list</button>:''}
                        {exercise.exerciseName ==='Login'?<button onClick={() => window.location.href='/login'} className="link">Go to Login</button>:''}
                    </div> 
                ))} 
            </div> 
        </div> 
    ); 
} 

export default ExerciseList;