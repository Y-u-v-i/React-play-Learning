import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
const NewUserLogin = () => {
  const navigate=useNavigate()
  function handleback(){
    navigate('/login')
  }
  return (
    <div className='log'>
      <h2>You have successfully Signedup !!</h2>
      <button className='end' onClick={handleback}>Back to Login</button>
    </div>
  );
};

export default NewUserLogin;