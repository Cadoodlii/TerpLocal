import React from "react";
import "../page-title/PageTitle.css"
import Projects from "../projects/Projects";



function Dashboard ({projects}) {

    return (
        <section>
            <div className="title">
                Dashboard
            </div>
            <h2 className="side-column">
                    Your Recommended Projects:
            </h2>
            <div className="container">
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Dashboard;