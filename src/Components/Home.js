import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import itemsSold from "../takeinput";
import TableStruct from "../TableStruct";
import "../App.css";

const Home = ({ user, setUser }) => {
  const [showTable, setShowTable] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const totalRevenue = itemsSold.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dynamic">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <li>
                <button className="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TableTurn{user && `, ${user.email}`}</h1>
          <p>
            Your ultimate platform for React project showcases and source code
            distribution.
          </p>
          <div
            className="button animation"
            onClick={() => setShowTable(!showTable)}
          >
            {showTable ? "Hide My Projects" : "Show My Projects"}
          </div>
        </div>
      </section>

      {showTable && (
        <section className="project-table">
          <TableStruct itemsSold={itemsSold} totalRevenue={totalRevenue} />
        </section>
      )}

      <section className="slider">
        <div className="slide">
          <h2>Project One: Dynamic Source</h2>
          <button className="button" onClick={() => navigate("/dynamic")}>
            View Project
          </button>
        </div>
        <div className="slide">
          <h2>About</h2>
          <button className="button" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
      </section>

      <section className="information">
        <div className="info-content">
          <h2>About TableTurn</h2>
          <p>
            TableTurn is an Ed-Tech Omiverse aimed at creating a vibrant
            community of React developers. Share your projects, collaborate with
            others, and learn from the best in the field.
          </p>
        </div>
        <div className="info-content">
          <h2>Join Our Community</h2>
          <p>
            Engage with other developers, share your ideas, and get feedback on
            your projects. Join our community forums and Slack channel today!
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TableTurn. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
