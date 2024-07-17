import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Componets/Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(e) {
        e.preventDefault();

      
        const simulatedResponse = {
            data: email === "existinguser@example.com" ? "exist" : "notexist"
        };

        try {
            if (simulatedResponse.data === "exist") {
                alert("User already exists");
            } else if (simulatedResponse.data === "notexist") {
                navigate("/home", { state: { id: email } });
            }
        } catch (error) {
            console.error("Error handling login:", error);
            alert("Something went wrong, please try again.");
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    );
}

export default Login;
