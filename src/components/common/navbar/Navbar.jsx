import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

import "./Navbar.css";

function Navbar({onLogout, isLoggedIn}) {

    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate("/login");
    };

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Dashboard</Link>
            <Link to="/opportunites" className="navbar-item">Opportunities</Link>
            <Link to="/rewards" className="navbar-item">Rewards</Link>
            {isLoggedIn ? <Link to="/profile" className="navbar-item">Profile</Link> : <Link to="/login" className="navbar-item">Login</Link>}
            {isLoggedIn && <Link to="#" className="navbar-item" onClick={handleLogout}>Logout</Link>}
        </section>
    )
}

export default Navbar;