import React, { useState } from 'react';
import '../pages/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p>Welcome! Please fill in the details to create your account.</p>
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
        <button type="submit" className="btn">SIGN UP</button>
        <p style={{ textAlign: "center", marginTop: "2vh" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;

