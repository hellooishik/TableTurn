import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // the Constuctors can direct
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // the set of adjectives will be set to the main frame
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      //
      // Assuming the response indicates success, set the user as authenticated
      setIsAuthenticated(true);
      setEmail(""); // Clear email input after successful registration
      setPassword(""); // Clear password input after successful registration
    } catch (err) {
      console.error(err);
      setError("Error creating account"); // Display error message
    }
  };

  return (
    <div>
      <h3>Create a new account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}{" "}
      {/* Display error message if registration fails */}
      <Link to="/">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
