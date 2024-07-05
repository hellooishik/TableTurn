import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import itemsSold from "../takeinput"; // Assuming this contains data for project items
import TableStruct from "../TableStruct"; // Assuming this is your table component

import "../App.css"; // Your CSS file for styling
import "../hero.css";
import Swiper from "swiper"; // Import Swiper library if not already done

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
      text: "Another testimonial text here.",
      author: "John Doe",
      position: "Full Stack Developer",
    },
  ];
  // The set of the adjectives will be set to the main frame of the total subsets
  // Counter state
  const [counters] = useState({
    projects: 25,
    users: 1500,
    events: 10,
  });

  // the
  // Additional sections data
  const additionalSections = [
    {
      title: "Upcoming Events",
      content:
        "Join us for upcoming workshops, webinars, and hackathons. Stay tuned for exciting events!",
    },
    // This set of adjectives

    {
      title: "Get Involved",
      content:
        "Contribute to open-source projects, participate in community discussions, and grow as a developer.",
    },
  ];

  // React.RouterDom is been adjsustd
  // the set of

  // Initialize Swiper after component mount
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      effect: "slide",
      loop: true,
      autoplay: {
        delay: 5500,
      },
      speed: 1200,
      mousewheel: false,
      keyboard: true,
      // Add more Swiper options as needed
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  // dependencies mount object rendering

  return (
    <div className="home-container">
      {/* Swiper Slider Section */}
      <div className="swiper-container swiper-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage:
                  "url(..assets/autism-day-with-colorful-portrait.jpg)",
              }}
            ></div>
            <div className="swiper-slide-caption text-center context-dark">
              <h1>TableTurn</h1>
              <h3>Design and SEO Expert</h3>
              <div className="group-lg group-middle"></div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}../assets/hello.jpg)`,
              }}
            ></div>

            <div className="swiper-slide-caption context-dark">
              <h2>The Power of Bootstrap</h2>
              <p>Discover it with Element</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="swiper-slide-img"
              style={{
                backgroundImage:
                  "url(https://srv1474-files.hstgr.io/2af89e9a390ab5e2/files/public_html/wp-content/themes/cognicirege/assets/vintage-collage-person-doing-kayaking-road.jpg)",
              }}
            ></div>
            <div className="swiper-slide-caption context-dark">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h2>Built by geeks & used by humans</h2>
                    <h5>
                      Element aims to satisfy real needs of real projects. We've
                      got a pack of tools for that.
                    </h5>
                    <div className="group-lg group-middle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* the main react module will be used by the main frame of the total set of Actions */}
      {/* react.LoopHole will be used for the total set of the React.RouterDom  */}
      {/* CTA Section */}
      <section className="section-xs section-cta bg-gray-dark text-center text-md-left">
        <div className="container">
          <div className="row row-30 justify-content-between align-items-center">
            <div className="col-12 col-md-8">
              <h4>Like What We Offer?</h4>
              <p>
                Start with this demo now or check out the others in the full
                version of this template.
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-right">
              <a className="button button-primary" href="about.html">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TableTurn{user && `, ${user.email}`}</h1>
          <p>
            Your ultimate platform for React project showcases and source code
            distribution.
          </p>
          <div className="button" onClick={() => setShowTable(!showTable)}>
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
          </div>
        ))}
      </section>

      <div className="buttons-section">
        <button
          className="button view-projects-button"
          onClick={() => navigate("/projects")}
        >
          View Projects
        </button>
        <button
          className="button explore-resources-button"
          onClick={() => navigate("/resources")}
        >
          Explore Resources
        </button>
      </div>
    </div>
  );
};

export default Home;
