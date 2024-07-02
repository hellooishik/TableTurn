// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need support, feel free to reach out to us
        at:
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Email: support@tableturn.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>Phone: (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Address: 123 Tech Street, Innovation City</span>
        </div>
      </div>
      <form className="contact-form">
        <h2>Send us a message</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" className="button">
          Send
        </button>
      </form>
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Contact;
