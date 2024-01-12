import "../login/Login.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp, isStudent }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (username && password) {
          onSignUp();
          navigate("/login");
        } else {
            setError('Invalid username or password');
        }
    };

    const role = isStudent ? "Student" : "Business";

    return (
        <div>
            <h2>{role} Sign Up</h2>
            <br></br>
            <form>
                <div>
                    <label htmlFor="username">Enter a username:</label>&nbsp;&nbsp;
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
                    <label htmlFor="password">Enter a password:</label>&nbsp;&nbsp;
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
                <button type="button" className="custom-btn" onClick={handleSignUp}>Complete Registration</button>
            </form>
        </div>
    );
};

export default SignUp;