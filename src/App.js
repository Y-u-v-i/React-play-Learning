import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Todo from './exercise/todo'; 
import ExerciseList from './exercise/ExerciseList'; 
import './App.css'; 
import initialExercises from './exercises.json'; 

function App() { 
    const [exercises, setExercises] = useState(initialExercises); 

    const addExercise = (newExercise) => { 
        setExercises([...exercises, newExercise]); 
    }; 

    const removeExercise = (index) => { 
        const newExercises = exercises.filter((v, i) => i !== index); 
        setExercises(newExercises); 
    }; 

    return ( 
        <Router> 
            <div className="App"> 
                <Routes> 
                    <Route path="/todo" element={<Todo addExercise={addExercise} exercises={exercises} />} /> 
                    <Route path="/" element={<ExerciseList exercises={exercises} removeExercise={removeExercise} />} /> 
                </Routes> 
            </div> 
        </Router> 
    ); 
} 

export default App;