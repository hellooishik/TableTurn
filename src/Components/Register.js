// src/Components/Register.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
      alert("Error creating account");
    }
  };

  return (
    <div>
      <h3>Create a new account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;