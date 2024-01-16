import React from "react";
import { Navbar } from "../../common";
import {Link} from "react-router-dom"


import "./Header.css";

function Header({onLogout, isLoggedIn, isStudent}) {

    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <Link to= "/" className="header-logo"> TerpLocal </Link>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar isLoggedIn={isLoggedIn} onLogout= {onLogout} isStudent = {isStudent}/>
                    </section>
                    <hr className="header-top__separator"/>
                </section>
            </section>
        </section>
    )
}

export default Header;