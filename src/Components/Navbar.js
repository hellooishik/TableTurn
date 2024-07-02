import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dynamic from "./Dynamic";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import Projects from "./Projects";
import AddProject from "./AddProject";
import logo from "../assets/logo.png"; // Import your logo image file
import "../Navbar.css";

const Navbar = ({ setIsAuthenticated }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Table Turn Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/add-project">Add Project</Link>
          </li>
          <li>
            <Link to="/dynamic">Dynamic</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navbar;
