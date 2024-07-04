import React from "react";
import "../css/Banner.css"; // Import your CSS file for Banner styling

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2 className="banner-title">Discover Amazing Projects</h2>
        <p className="banner-text">
          Explore a wide range of innovative React projects. Find inspiration
          for your next big idea.
        </p>
        <button className="banner-button">Explore Now</button>
      </div>
    </div>
  );
};

export default Banner;
