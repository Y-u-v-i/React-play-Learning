import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login Validators/Login';
import Signup from './Login Validators/Signup';
import NewUserLogin from './Login Validators/NewUserLogin';
import Dashboard from './Login Validators/Dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/newuserlogin" element={<NewUserLogin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;