import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='header'>
        <h2>Dashboard</h2>
        <ul className='navbar'>
          <li>
            <Link className='list' to="/profile">View Profile</Link>
          </li>
          <li>
            <Link className='list' to="/settings">Settings</Link>
          </li>
          <li>
            <Link className='list' to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;