import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicSource from './DynamicSource'; // Import DynamicSource component
import './App.css';

const Dynamic = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);
  const [userName, setUserName] = useState('');

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowCodeSnippet(false); // Close code snippet view when popup is toggled
  };

  const handleShowSource = () => {
    setShowCodeSnippet(true); // Set showCodeSnippet to true when showing source code
    setShowPopup(false); // Close popup when showing code snippet
  };

 

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="main-heading">Welcome The Dynamic Name Writing</h1>
        <h4 className="project-description"> Users can personalize their interaction by entering their name, triggering dynamic updates throughout the application. With features like interactive popups and the ability to view source code dynamically,</h4>
      </div>

      <h2>Hello {userName || 'User'}</h2>

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
        Click for Options
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

      {showCodeSnippet && (
        <DynamicSource componentName="Dynamic" />
      )}

      <Link to="/" className="go-back">
        Go Back
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
