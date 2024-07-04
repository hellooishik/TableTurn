import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput"; // Assuming this contains data for project items
import TableStruct from "../TableStruct"; // Assuming this is your table component
import Banner from "./Banner";
import "../App.css"; // Your CSS file for styling
import "../hero.css";

const Home = ({ user }) => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  // Calculate total revenue from itemsSold
  const totalRevenue = itemsSold.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual submission logic
    console.log("Form submitted:", formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
    {
      id: 3,
      text: "I love how TableTurn fosters collaboration among developers. It's a great platform to showcase your projects and learn from others.",
      author: "Jane Smith",
      position: "Frontend Engineer",
    },
    {
      id: 4,
      text: "I love how TableTurn fosters collaboration among developers. It's a great platform to showcase your projects and learn from others.",
      author: "Jane Smith",
      position: "Frontend Engineer",
    },
    {
      id: 5,
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

      {showTable && <TableStruct itemsSold={itemsSold} />}

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <p>{testimonial.text}</p>
              <p>
                <strong>{testimonial.author}</strong>, {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-grid">
        {[
          {
            imgSrc: "https://via.placeholder.com/150/0000FF/808080?text=SEO",
            title: "SEO",
            iconClass: "linearicons-magnifier",
          },
          {
            imgSrc: "https://via.placeholder.com/150/FF0000/FFFFFF?text=PPC",
            title: "PPC",
            iconClass: "linearicons-chart-growth",
          },
          {
            imgSrc:
              "https://via.placeholder.com/150/00FF00/000000?text=Social+Media",
            title: "Social Media",
            iconClass: "linearicons-bubbles",
          },
          {
            imgSrc:
              "https://via.placeholder.com/150/FFFF00/000000?text=Web+Development",
            title: "Web Development",
            iconClass: "linearicons-laptop-phone",
          },
          {
            imgSrc:
              "https://via.placeholder.com/150/0000FF/FFFFFF?text=Content+Marketing",
            title: "Content Marketing",
            iconClass: "linearicons-pencil",
          },
          {
            imgSrc:
              "https://via.placeholder.com/150/FF00FF/000000?text=Email+Marketing",
            title: "Email Marketing",
            iconClass: "linearicons-envelope",
          },
        ].map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.imgSrc} alt={service.title} />
            <div className="service-content">
              <i className={service.iconClass}></i>
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </section>

      <section className="counters">
        <div className="counter-item">
          <h3>{counters.projects}</h3>
          <p>Projects Completed</p>
        </div>
        <div className="counter-item">
          <h3>{counters.users}</h3>
          <p>Happy Users</p>
        </div>
        <div className="counter-item">
          <h3>{counters.events}</h3>
          <p>Events Organized</p>
        </div>
      </section>

      <section className="additional-sections">
        {additionalSections.map((section, index) => (
          <div key={index} className="additional-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            <div
              className="button"
              onClick={() => navigate(section.actionLink)}
            >
              {section.actionText}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
