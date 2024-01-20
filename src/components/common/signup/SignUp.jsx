import "../login/Login.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp, isStudent }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [business, setBusiness] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (email && password) {
          onSignUp();
          navigate("/login");
        } else {
            setError('Invalid email or password');
        }
    };

    const role = isStudent ? "Student" : "Business";

    return (
        <div className="container">
            <h2>{role} Sign Up</h2>
            <br></br>
            <form>
                <div>
                    <label htmlFor="name">Enter a name:</label>&nbsp;&nbsp;
                    <input type="text" className="login_field"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Enter a email:</label>&nbsp;&nbsp;
                    <input type="text" className="login_field"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Enter a password:</label>&nbsp;&nbsp;
                    <input type="password" className="login_field"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {!isStudent && (<>
                    <br></br>
                    <div>
                        <label htmlFor="business">Enter your business:</label>&nbsp;&nbsp;
                        <input type="text" className="login_field"
                            id="business"
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                        />
                    </div>
                </>)}

                {isStudent && (
                    <>
                        <br />
                        <div>
                            <label htmlFor="school">Choose your school:</label>&nbsp;&nbsp;
                            <select className="login_field" id="school" name="school" onChange={(e) => setSchool(e.target.value)}>
                                <option value="umd">University of Maryland</option>
                                <option value="pgcc">Prince George's Community College</option>
                            </select>
                        </div>
                        <br></br>
                        <div>
                        <label htmlFor="major">Choose your major:</label>&nbsp;&nbsp;
                        <select className="login_field" id="major" name="major" onChange={(e) => setMajor(e.target.value)}>
                            <option value="cs">Computer Science</option>
                            <option value="business">Business</option>
                            <option value="art">Art</option>
                        </select>
                        </div>
                    </>
                )}

                {error && <p style={{color: 'red'}}>{error}</p>}
                <br></br>
                <button type="button" className="custom-btn" onClick={handleSignUp}>Complete Registration</button>
            </form>
        </div>
    );
};

export default SignUp;