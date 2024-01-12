import "../login/Login.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, isStudent }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'demo' && password === 'password') {
          onLogin(username);
          navigate("/profile");
        } else {
            setError('Invalid username or password');
        }
    };

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
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <br></br>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;