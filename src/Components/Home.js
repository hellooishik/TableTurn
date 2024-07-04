import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput"; // Assuming this contains data for project items
import TableStruct from "../TableStruct"; // Assuming this is your table component
import Slider from "react-slick"; // Import Slider component for carousel/slider
import Banner from "./Banner"; // Import Banner component for visual appeal
import Grid from "./Grid"; // Import Grid component for structured layout
import "../App.css"; // Your CSS file for styling

const Home = ({ user }) => {
  const [showTable, setShowTable] = useState(true);
  const navigate = useNavigate();

  // Calculate total revenue from itemsSold
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

  // Counter state
  const [counters] = useState({
    projects: 25,
    users: 1500,
    events: 10,
  });

  // Additional sections data
  const additionalSections = [
    {
      title: "Upcoming Events",
      content:
        "Join us for upcoming workshops, webinars, and hackathons. Stay tuned for exciting events!",
      actionText: "View Events",
      actionLink: "/events",
    },
    {
      title: "Get Involved",
      content:
        "Contribute to open-source projects, participate in community discussions, and grow as a developer.",
      actionText: "Join Now",
      actionLink: "/get-involved",
    },
  ];

  // Settings for the Slider component
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
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
        <section className="project-section">
          <h2 className="section-title">My Projects</h2>
          <TableStruct itemsSold={itemsSold} totalRevenue={totalRevenue} />
        </section>
      )}

      <section className="banner-section">
        <Banner />
      </section>

      <section className="grid-section">
        <Grid />
      </section>

      <section className="info-section">
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
          <h2>{counters.projects}</h2>
          <p>Projects</p>
        </div>
        <div className="counter">
          <h2>{counters.users}</h2>
          <p>Users</p>
        </div>
        <div className="counter">
          <h2>{counters.events}</h2>
          <p>Events</p>
        </div>
      </section>

      {additionalSections.map((section, index) => (
        <section className="additional-section" key={index}>
          <h2 className="section-title">{section.title}</h2>
          <p>{section.content}</p>
          <button
            className="button"
            onClick={() => navigate(section.actionLink)}
          >
            {section.actionText}
          </button>
        </section>
      ))}

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
