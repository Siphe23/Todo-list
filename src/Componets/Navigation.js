import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></li>
          <li>
            <button className='Singup-div'>
              <NavLink to= "/signup" className={({ isActive }) => (isActive ? 'active' : '')}>Signup</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

