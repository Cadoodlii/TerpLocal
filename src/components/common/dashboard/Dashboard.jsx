import React from "react";
import "../page-title/PageTitle.css";
import "./Dashboard.css"
import Projects from "../projects/Projects";
import { AccountSetUp } from "./AccountSetUp";


function Dashboard ({projects, isStudent}) {

    if (isStudent) {
        return (
            <section>
                <div className="title">
                    Dashboard
                </div>
                <h2 className="side-column">
                        Finish setting up your account!
                </h2>
                <div className="container">
                    <AccountSetUp />
                </div>
                <h2 className="side-column">
                        Your Recommended Projects:
                </h2>
                <div className="container">
                    <Projects projects={projects} />
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div className="title">
                    Dashboard
                </div>
            </section>
        )
    }
}

export default Dashboard;