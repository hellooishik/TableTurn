import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput";
import TableStruct from "../TableStruct";
import "../App.css";

const Home = ({ user, setUser }) => {
  const [showTable, setShowTable] = useState(true);
  const navigate = useNavigate();

  const totalRevenue = itemsSold.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "TableTurn has been instrumental in my journey as a React developer. The community support and resources available here are unparalleled.",
      author: "John Doe",
      position: "Full Stack Developer",
    },
    {
      id: 2,
      text: "I love how TableTurn fosters collaboration among developers. It's a great platform to showcase your projects and learn from others.",
      author: "Jane Smith",
      position: "Frontend Engineer",
    },
  ];

  // the main module will be fetched from the set of integers

  // the module setData Adjustments

  // Counter state
  const [counter] = useState({
    projects: 25,
    users: 1500,
    events: 10,
  });

  return (
    <div className="App">
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
            TableTurn is an Ed-Tech Omniverse aimed at creating a vibrant
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

      <section className="counters">
        <div className="counter">
          <h2>{counter.projects}</h2>
          <p>Projects</p>
        </div>
        <div className="counter">
          <h2>{counter.users}</h2>
          <p>Users</p>
        </div>
        <div className="counter">
          <h2>{counter.events}</h2>
          <p>Events</p>
        </div>
      </section>
      {/* // this is the set of the total set  */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <p>{testimonial.text}</p>
              <p className="author">{testimonial.author}</p>
              <p className="position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
