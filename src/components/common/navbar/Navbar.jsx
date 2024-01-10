import React from "react";
import {Link} from "react-router-dom"

import "./Navbar.css";

function Navbar() {

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/opportunites" className="navbar-item">Opportunities</Link>
            <Link to="/rewards" className="navbar-item">Rewards</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
        </section>
    )
}

export default Navbar;