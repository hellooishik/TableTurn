import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        setIsAuthenticated(true);
        navigate("/"); // Navigate to the home page after login
      }
    } catch (err) {
      console.error(err);
      setError("Failed to save user data");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <section className="section parallax-container context-dark">
        <div className="parallax-content parallax-header">
          <div className="parallax-header__inner context-dark">
            <div className="parallax-header__content">
              <div className="container">
                <div className="row justify-content-sm-center">
                  <div className="col-md-10 col-xl-8">
                    <h2 className="heading-decorated">Login</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-md bg-default decor-text"
        data-content="Login"
      >
        <div className="container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-box">
                <h3 className="login-title">Welcome to TableTurn</h3>
                <p className="login-subtitle">Please login to continue</p>
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-wrap form-wrap_icon">
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label">Email</label>
                  </div>
                  <div className="form-wrap form-wrap_icon">
                    <input
                      className="form-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="form-label">Password</label>
                    <button
                      type="button"
                      className="toggle-password-btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide Password" : "Show Password"}
                    </button>
                  </div>
                  {error && <p className="error-message">{error}</p>}
                  <button
                    type="submit"
                    className="button button-primary button-shadow login-btn"
                  >
                    Login
                  </button>
                </form>
                <Link to="/register" className="register-link">
                  New User? Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
