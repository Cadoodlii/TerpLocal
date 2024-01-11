import React from "react";
import "../page-title/PageTitle.css"

function Dashboard ({isStudent}) {

    return (
        <section>
            <div className="title">
                Dashboard
            </div>
            <p>
                This is where home stuff goes.
            </p>
            <p>
                {isStudent ? "you are a student" : "you are a business"}
            </p>
        </section>
    )
}

export default Dashboard;