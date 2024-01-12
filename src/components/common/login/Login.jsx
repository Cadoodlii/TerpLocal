import "../login/Login.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, isStudent }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
          onLogin(username);
          navigate("/dashboard");
        } else {
            setError('Invalid username or password');
        }
    };
    const handleSignUp = () => {
        navigate("/signup");
    }

    const role = isStudent ? "Student" : "Business";

    return (
        <div>
            <h2>{role} Login</h2>
            <br></br>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>&nbsp;&nbsp;
                    <input
                        type="text"
                        className="login_field"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Password:</label>&nbsp;&nbsp;
                    <input
                        type="password"
                        className="login_field"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <br></br>
                <button type="button" className="custom-btn" onClick={handleLogin}>Login</button>&nbsp;&nbsp;
                <button type="button" className="custom-btn" onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    );
};

export default Login;