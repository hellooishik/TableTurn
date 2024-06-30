import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';

const About = () => {
  return (
    <div className="App">
      <h1>About This Project</h1>
      <p>This project showcases a dynamic and interactive way to display a record of sold items using React and CSS animations.</p>
      <p>Clicking on "Show My Project" reveals a table of items sold, complete with prices and quantities, and calculates the total revenue.</p>
      <p>We hope you find this example both informative and engaging!</p>
      
      <Link to="/">Go Back</Link> {/* Link component for navigation */}
    </div>
  );
};

export default About;
