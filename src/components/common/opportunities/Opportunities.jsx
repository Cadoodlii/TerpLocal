import React, { useEffect, useState } from "react";
import "../page-title/PageTitle.css";
import Projects from "../dashboard/projects/Projects";
import "./Opportunities.css";

function Opportunities({ projects, isStudent }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  let filters = ["computer science", "business", "art"];

  const handleFilterButtonClick = (selectedMajor) => {
    if (selectedFilters.includes(selectedMajor)) {
      let filters = selectedFilters.filter((major) => major !== selectedMajor);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedMajor]);
    }
  };

  useEffect(() => {
    const filterProjects = () => {
      if (selectedFilters.length > 0) {
        let tempProj = selectedFilters.map((selectedMajor) => {
          let temp = projects.filter(
            (project) => project.major === selectedMajor
          );
          return temp;
        });
        setFilteredProjects(tempProj.flat());
      } else {
        setFilteredProjects([...projects]);
      }
    };
    filterProjects();
  }, [selectedFilters, projects]);

  if (isStudent) {
    return (
      <section>
        <div className="title"></div>
        <h2 className="side-column">
          Filter :
          {filters.map((major, idx) => (
            <button
              onClick={() => handleFilterButtonClick(major)}
              className={`button ${
                selectedFilters?.includes(major) ? "active" : ""
              }`}
              key={`filters-${idx}`}
            >
              {major}
            </button>
          ))}
        </h2>
        <div className="container">
          <Projects projects={filteredProjects} />
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="title"></div>
        <p>This is where opportunity stuff goes.</p>
        <p>{isStudent ? "you are a student" : "you are a business"}</p>
      </section>
    );
  }
}

export default Opportunities;
