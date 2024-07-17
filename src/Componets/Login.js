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
                navigate("/home");
            } else if (simulatedResponse.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            console.error("Error handling login:", error);
            alert("Something went wrong, please try again.");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
            <p>OR</p>
            <Link to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;

