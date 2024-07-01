// src/Components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h3>Welcome to TableTurn</h3>
      <p>Please login to continue</p>
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
        <button type="submit">Login</button>
      </form>
      <Link to="/register">New User? Create an account</Link>
    </div>
  );
};

export default Login;
