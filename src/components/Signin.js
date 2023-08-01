import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));

        navigate("/#hero");
      } // Assuming the token is returned in the "token" field of the response

      setError("");
      // Optionally, you can save the token in local storage or session storage for persistence
      // localStorage.setItem('token', token);

      // Reset form fields

      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.response.data.msg || "An error occurred");
    }
  };

  return (
    <section id="hero" className="d-flex justify-content-center">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <div className="input-container">
            <label htmlFor="email" className="rounded-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="rounded-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="rounded-input"
            />
          </div>
          <button type="submit" className="rounded-button">
            Sign In
          </button>
        </form>

        {error && <div className="error">Error: {error}</div>}
      </div>
      <div
        className="col-lg-6 order-1 order-lg-2 hero-img"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src="assets/img/skills.png" class="img-fluid animated" alt="" />
      </div>
    </section>
  );
}

export default SignInForm;
