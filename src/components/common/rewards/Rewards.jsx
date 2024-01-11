import React from "react";
import "../page-title/PageTitle.css"

function Rewards ({isStudent}) {

    return (
        <section>
            <div className="title">
                Rewards
            </div>
            <p>
                This is where rewards stuff goes.
            </p>
            <p>
                {isStudent ? "you are a student" : "you are a business"}
            </p>
        </section>
    )
}

export default Rewards;