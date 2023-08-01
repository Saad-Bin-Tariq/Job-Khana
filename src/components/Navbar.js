import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [userName, setUserNAme] = useState("");
  const [dataError, setDataError] = useState("");
  const navigate = useNavigate();

  const clearLocalStorage = async () => {
    localStorage.clear();
    setUserNAme("");
    navigate("/#hero");
    navigate(0);
  };

  const getUser = async () => {
    if (localStorage.length !== 0) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUserNAme(storedUser.user.name);
    }
  };

  useEffect(() => {
    getUser();
  });

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Job Khana</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <HashLink
                  className={
                    activeItem === "Home"
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                  to="/#hero"
                  onClick={() => handleItemClick("Home")}
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  className={
                    activeItem === "About"
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                  to="/#about"
                  activeClassName="active"
                  onClick={() => handleItemClick("About")}
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  className={
                    activeItem === "Jobs"
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                  to="/#jobs"
                  onClick={() => handleItemClick("Jobs")}
                >
                  Jobs
                </HashLink>
              </li>
              {userName === "" ? (
                <>
                  <li>
                    <HashLink
                      className={
                        activeItem === "Login"
                          ? "nav-link scrollto active"
                          : "nav-link scrollto"
                      }
                      to="/login"
                      onClick={() => handleItemClick("Login")}
                    >
                      Log In
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className={
                        activeItem === "Register"
                          ? "getstarted scrollto active"
                          : "getstarted scrollto"
                      }
                      to="/register"
                      onClick={() => handleItemClick("Register")}
                    >
                      Register
                    </HashLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <HashLink
                      className="getstarted scrollto"
                      onClick={clearLocalStorage}
                    >
                      Log Out
                    </HashLink>
                  </li>
                  <li>
                    <span className="navUser">
                      Hi {userName.charAt(0).toUpperCase() + userName.slice(1)}
                    </span>
                  </li>
                </>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
