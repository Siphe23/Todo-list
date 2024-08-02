import React, { useState } from 'react';
import '../pages/Login.css'; // Import the Login-specific styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login to your account</h2>
        <p>Welcome back! Please enter your credentials to log in.</p>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input 
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            className="form-control" 
            id="email" 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input 
            onChange={e => setPassword(e.target.value)} 
            type="password" 
            className="form-control" 
            id="password" 
            required
          />
        </div>
        <button type="submit" className="btn">LOG IN</button>
        <p style={{ textAlign: "center", marginTop: "2vh" }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
