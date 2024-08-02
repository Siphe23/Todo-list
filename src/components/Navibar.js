import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; 

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>
        Login
      </NavLink>
      <NavLink to="/signup" className="nav-link">
        Signup
      </NavLink>
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
