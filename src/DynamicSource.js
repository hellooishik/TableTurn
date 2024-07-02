import React from "react";
import "./App.css";

const DynamicSource = ({ componentName }) => {
  // Example source code based on componentName
  const getSourceCode = (componentName) => {
    switch (componentName) {
      case "Dynamic":
        return `
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    setShowCodeSnippet(!showCodeSnippet);
    setShowPopup(false); // Close popup when showing code snippet
  };

  const handleShowProject = () => {
    // Handle logic to show project in action (e.g., navigate to project demo page)
    alert('Showing project in action!');
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello {userName || 'User'}</h1>

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
          <button className="popup-option" onClick={handleShowProject}>
            Show Project in Action
          </button>
          <button className="close-popup" onClick={togglePopup}>
            Close
          </button>
        </div>
      )}

      {showCodeSnippet && (
        <div className="code-snippet">
          <h2>Example: Dynamic.js</h2>
          <pre>
            <code>{\` /* Paste your Dynamic.js code here */ \`}</code>
          </pre>
        </div>
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
`;

      // Add cases for other components if needed

      default:
        return null;
    }
  };

  const sourceCode = getSourceCode(componentName);

  if (!sourceCode) {
    return <div>No source code available for {componentName}</div>;
  }

  return (
    <div className="App">
      <h1>{componentName} Source Code</h1>
      <pre className="source-code">
        <code>{sourceCode}</code>
      </pre>
    </div>
  );
};

export default DynamicSource;
