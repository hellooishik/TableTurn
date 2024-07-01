// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need support, feel free to reach out to us
        at:
      </p>
      <ul>
        <li>Email: support@tableturn.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Tech Street, Innovation City</li>
      </ul>
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Contact;
