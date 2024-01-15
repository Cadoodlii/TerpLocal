import React from "react";
import "../page-title/PageTitle.css"
import "./Opportunities.css"
import OpProjects from "./OpProjects";

function Opportunities ({projects, isStudent}) {

    return (
        <section>
            <div className="title">
                Opportunites
            </div>
            <p>
                {isStudent ? "Student View" : "Business View"}
            </p>

            <div className="container opp-container">
                <OpProjects projects={projects} />
            </div>
        </section>
    )
}

export default Opportunities;