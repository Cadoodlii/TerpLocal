import React from "react";
import "../page-title/PageTitle.css"

function Profile ({isStudent}) {

    return (
        <section>
            <div className="title">
                Profile
            </div>
            <p>
                This is where profile stuff goes.
            </p>
            <p>
                {isStudent ? "you are a student" : "you are a business"}
            </p>
        </section>
    )
}

export default Profile;