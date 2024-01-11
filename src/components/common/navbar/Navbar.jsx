import React from "react";
import {Link} from "react-router-dom"

import "./Navbar.css";

function Navbar() {

    return (
        <section className="navbar">
            <Link to="*/login/dashboard" className="navbar-item">Dashboard</Link>
            <Link to="*/login/opportunites" className="navbar-item">Opportunities</Link>
            <Link to="*/login/rewards" className="navbar-item">Rewards</Link>
            <Link to="*/login/profile" className="navbar-item">Profile</Link>
        </section>
    )
}

export default Navbar;