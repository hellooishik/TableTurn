import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput"; // Assuming this holds project data
import TableStruct from "../TableStruct"; // Import the TableStruct component
import "../Navbar.css";
import "../Footer.css";

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

  return (
    <section className="project-grid">
      <h2>My Projects</h2>

      <div className="grid-container">
        <div className="project-card">
          <h3>Project One: Dynamic Source</h3>
          <button className="button" onClick={() => navigate("/dynamic")}>
            View Project
          </button>
        </div>
        <div className="project-card">
          <h3>Project Two: API Data Fetching</h3>
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
    </section>
  );
};

export default Projects;
