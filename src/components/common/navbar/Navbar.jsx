import React from "react";

import "./Navbar.css";

function Navbar() {

    return (
        <section className="navbar">
            <a href="/about" className="navbar-item">Home</a>
            <a href="/portfolio" className="navbar-item">Opportunities</a>
            <a href="/shop" className="navbar-item">Rewards</a>
            <a href="/blog" className="navbar-item">Profile</a>
        </section>
    )
}

export default Navbar;