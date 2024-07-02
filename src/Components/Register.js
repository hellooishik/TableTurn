import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Register.css"; // Import the CSS file

const Register = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setIsAuthenticated(true);
      setEmail(""); // Clear email input after successful registration
      setPassword(""); // Clear password input after successful registration
    } catch (err) {
      console.error(err);
      setError("Error creating account"); // Display error message
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h3 className="register-title">Create a new account</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <Link to="/" className="login-link">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
};

export default Register;
