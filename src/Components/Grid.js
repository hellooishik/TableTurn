import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Grid.css"; // Import your CSS file for Grid styling

const Grid = () => {
  const navigate = useNavigate();

  const redirectToProjects = () => {
    navigate("/projects"); // Redirects to projects page
  };

  const openSourceCodes = () => {
    // Implement functionality to open source codes
    // Example: window.open("/source-codes", "_blank");
    alert("Explore resources functionality");
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h3 className="grid-title">Featured Projects</h3>
        <p className="grid-text">
          Discover trending projects curated just for you. Stay updated with the
          latest in React development.
        </p>
        <button className="grid-button" onClick={redirectToProjects}>
          View Projects
        </button>
      </div>
      <div className="grid-item">
        <h3 className="grid-title">Developer Resources</h3>
        <p className="grid-text">
          Access resources, tutorials, and tools to enhance your React skills.
          Grow as a developer with TableTurn.
        </p>
        <button className="grid-button" onClick={openSourceCodes}>
          Explore Resources
        </button>
      </div>
    </div>
  );
};

export default Grid;
