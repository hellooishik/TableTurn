import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dynamic from './Dynamic'; // Correct import with uppercase
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dynamic" element={<Dynamic />} /> {/* Corrected component name */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
