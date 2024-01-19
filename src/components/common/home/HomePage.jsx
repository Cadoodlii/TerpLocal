import React from "react";
import "../page-title/PageTitle.css";


function HomePage ({isStudent}) {
        return (
            <section className="container">
                <div className="title">
                    {/** Website Description (HomePage) */}
                    <h1> Welcome to</h1>
                </div>
                <div to= "/" className="header-logo"> TerpLocal </div>
                <p>
                    TerpLocal is a platform connecting UMD students with local businesses<br></br>
                    in the College Park area, giving opportunities for students to  <br></br>
                    work on projects and develop their professional skills. <br></br>


                </p>
            </section>
        )
}

export default HomePage;