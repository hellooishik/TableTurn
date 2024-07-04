import React, { useState } from "react";
import { Link } from "react-router-dom";
import DynamicSource from "../DynamicSource"; // Import DynamicSource component
import "../App.css";

const Dynamic = () => {
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowCodeSnippet(false); // Close code snippet view when popup is toggled
  };

  const handleShowSource = () => {
    setShowCodeSnippet(true); // Set showCodeSnippet to true when showing source code
    setShowPopup(false); // Close popup when showing code snippet
  };

  return (
    <div className="dynamic-container">
      <header className="header">
        <h1 className="main-heading">Dynamic Name Writing</h1>
        <p className="project-description">
          Personalize your interaction by entering your name, triggering dynamic
          updates throughout the application. Explore interactive popups and
          view source code dynamically.
        </p>
      </header>

      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>Dynamic</span>
          </li>
        </ul>
      </nav>

      <section className="content">
        <h2>Hello {userName || "User"}</h2>

        <div className="typing-input">
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            placeholder="Start typing your name..."
            className="input-field"
          />
        </div>

        <button className="popup-button" onClick={togglePopup}>
          Options
        </button>

        {showPopup && (
          <div className="popup">
            <h2>Choose an Option:</h2>
            <button className="popup-option" onClick={handleShowSource}>
              Show Source Code
            </button>

            <button className="close-popup" onClick={togglePopup}>
              Close
            </button>
          </div>
        )}

        {showCodeSnippet && <DynamicSource componentName="Dynamic" />}
      </section>

      <section className="information">
        <div className="info-item">
          <h3>Interactive Name Input</h3>
          <p>
            Enter your name in the input field to see dynamic updates and
            personalized greetings.
          </p>
        </div>
        <div className="info-item">
          <h3>Popup Options</h3>
          <p>
            Click the "Options" button to view additional features and show
            source code dynamically.
          </p>
        </div>
      </section>

      <Link to="/" className="go-back">
        <span>Go Back</span>
        <div className="bubbles-container">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>
      </Link>
    </div>
  );
};

export default Dynamic;
