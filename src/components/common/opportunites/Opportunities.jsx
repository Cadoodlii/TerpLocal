import React from "react";
import "../page-title/PageTitle.css"

function Opportunities ({projects, isStudent}) {

    return (
        <section>
            <div className="title">
                Opportunites
            </div>
            <p>
                This is where opportunity stuff goes.
            </p>
            <p>
                {isStudent ? "you are a student" : "you are a business"}
            </p>
        </section>
    )
}

export default Opportunities;