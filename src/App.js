import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import Navbar component
import Footer from "./Components/Footer"; // Import Footer component
import "./App.css";
import "./css/Footer.css";
import "./css/Navbar.css";

function App() {
  const [setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} />{" "}
        {/* Add Navbar component */}
        <Footer setIsAuthenticated={setIsAuthenticated} />{" "}
        {/* Add Footer component */}
      </div>
    </Router>
  );
}

export default App;
