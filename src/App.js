import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dynamic from "./Dynamic"; // Correct import with uppercase
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/contact" element={<Contact />} />
          {/* Corrected component name */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
