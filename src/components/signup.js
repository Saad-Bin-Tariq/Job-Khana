import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_KEY;
      const response = await axios.post(`${apiUrl}/api/v1/auth/register`, {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/#hero");
      } // Assuming the token is returned in the "token" field of the response

      setError("");
      // Optionally, you can save the token in local storage or session storage for persistence
      // localStorage.setItem('token', token);

      // Reset form fields
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.response.data.msg || "An error occurred");
    }
  };

  return (
    <section id="hero" className="d-flex  justify-content-center">
      <div className="container">
        <div className="row ">
          <div
            className="col-lg-4 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Want To See Our Reach</h1>
            <h2>Register with us now</h2>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-container">
            <label htmlFor="name" className="rounded-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="rounded-input"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        {token && <div className="token">Token: {token}</div>}
        {error && <div className="error">Error: {error}</div>}
      </div>
    </section>
  );
}

export default SignUpForm;
