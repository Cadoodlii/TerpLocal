import React from "react";
import { Navbar } from "../../common";
import {Link} from "react-router-dom"


import "./Header.css";

function Header({onLogout, isLoggedIn}) {

    
    return (
        /* Condition for changing what the header looks like based on...*/
        /* If the user is logged in, or not */

        isLoggedIn ? /*isLoggedIn = true */ /* if logged in, show header as usual*/
        
        <section className="header">
            <section className="header-top">

                <section className="header-top__logo">
                    <Link to= "/" className="header-logo"> TerpLocal </Link>
                </section>
                
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar isLoggedIn={isLoggedIn} onLogout= {onLogout} />
                    </section>
                    <hr className="header-top__separator"/>
                </section>
            </section>
        </section>

        :    /*isLoggedIn = false */
             /*Just removes the logo from the header. Instead, The logo will instead be displayed*/
             /*above the login.  */
        <section className="header">
            <section className="header-top">
                
                
                
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar isLoggedIn={isLoggedIn} onLogout= {onLogout} />
                    </section>
                    <hr className="header-top__separator"/>
                </section>
            </section>
        </section>
    )
}

export default Header;