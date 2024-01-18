import React from "react";
import "../page-title/PageTitle.css";
import "./Dashboard.css";
import Projects from "./projects/Projects";
import { AccountSetUp } from "./AccountSetUp";

function Dashboard({ projects, isStudent, email }) {
  if (isStudent) {
    return (
      <section className="container">
        <div className="title"></div>
        <h2 className="side-column">
          Welcome, {email}. Finish setting up your account!
        </h2>
        <div>
          <AccountSetUp />
        </div>
        <br></br>
        <br></br>
        <h2 className="side-column">Your Recommended Projects:</h2>
        <div>
          <Projects projects={projects} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="container">
        <div className="title"></div>
        <h2 className="side-column">
          Welcome, {email}. Finish setting up your account:
        </h2>
        <div>
          <AccountSetUp />
        </div>
        <h2 className="side-column">Your Projects:</h2>
        <div>
          <Projects
            projects={projects.filter((project) => project.company === email)}
          />
        </div>
      </section>
    );
  }
}

export default Dashboard;
