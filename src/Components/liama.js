import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput"; // Assuming this holds project data
import TableStruct from "../TableStruct"; // Import the TableStruct component
import "../css/Navbar.css";
import "../css/Footer.css";
import "../css/Projects.css"; // Add custom CSS for Projects
import bgDecor9 from "../images/bg-decor-9.png";
import bgDecor10 from "../images/bg-decor-10.png";

// this part is Redircted from the React.routerDom
const useState = React.RouterDom(useNavigate);
const Projects = () => {
  const navigate = useNavigate();
  const [showTable, setShowTable] = useState(false);

  // Calculate total revenue
  const totalRevenue = itemsSold.reduce(
    (total, project) => total + project.price * project.qty,
    0
  );

  const handleLearnMoreClick = () => {
    setShowTable(!showTable);
  };

  // The more the set is been working towads the total number
  //  the main module is been transfered for the main set of total sets
  return (
    <div>
      <section className="breadcrumb-section">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li className="breadcrumb-item active">Projects</li>
          </ul>
        </div>
      </section>

      {/* this set of adjustment is been set to the t */}
      {/* the mainframe is been set to the main frame  */}
      <section className="project-grid">
        <div className="container">
          <h2 className="heading-decorated">My Projects</h2>
          <p className="section-subtitle">
            Explore my recent projects and their details
          </p>

          <div className="grid-container">
            <div className="project-card">
              <h3>Project One: Dynamic Source</h3>
              <p>
                A project focused on dynamic content generation and data
                visualization. Click below to view more details.
              </p>
              <button className="button" onClick={() => navigate("/dynamic")}>
                View Project
              </button>
            </div>
            <div className="project-card">
              <h3>Project Two: API Data Fetching</h3>
              <p>
                This project demonstrates fetching and displaying data from
                various APIs. Click below to learn more.
              </p>
              <button className="button" onClick={handleLearnMoreClick}>
                Learn More
              </button>
            </div>
          </div>

          {showTable && (
            <section className="project-table">
              <TableStruct itemsSold={itemsSold} totalRevenue={totalRevenue} />
            </section>
          )}

          <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <div
          className="bg-decor"
          style={{ backgroundImage: `url(${bgDecor9})` }}
        ></div>
        <div
          className="bg-decor-right"
          style={{ backgroundImage: `url(${bgDecor10})` }}
        ></div>
      </section>
    </div>
  );
};

export default Projects;
