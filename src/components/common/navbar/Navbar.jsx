import React from "react";
import {Link, useNavigate} from "react-router-dom"

import "./Navbar.css";

function Navbar({onLogout, isLoggedIn, isStudent}) {

    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate("/login");
    };

    return (
        isLoggedIn ?
        <section className="navbar">
            <Link to="/dashboard" className="navbar-item">Dashboard</Link>
            <Link to="/opportunities" className="navbar-item"> {isStudent ? "Opportunities" : "My Projects" } </Link>
            <Link to="/rewards" className="navbar-item">Rewards</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
            <Link to="/" className="navbar-item" onClick={handleLogout}>Logout</Link>
        </section> :
        <section className="navbar">
            {/* Navbar and header will not be visible when NOT logged in. */}
            {/* I did this to make the homepage look cleaner when  */}
            {/* new users are seeing it  */}
        </section>
    )
}

export default Navbar;