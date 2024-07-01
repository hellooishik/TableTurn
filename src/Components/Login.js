import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Default credentials for testing
  const defaultCredentials = {
    email: "test@example.com",
    password: "12345",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // For testing purposes, use default credentials if fields are empty
      const loginEmail = email || defaultCredentials.email;
      const loginPassword = password || defaultCredentials.password;

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h3>Welcome to TableTurn</h3>
      <p>Please login to continue</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to="/register">New User? Create an account</Link>
    </div>
  );
};

export default Login;
