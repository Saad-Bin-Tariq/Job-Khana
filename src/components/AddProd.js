import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProd = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [dataError, setDataError] = useState("");
  const navigate = useNavigate();

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const addProd = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.token) {
        const apiUrl = process.env.REACT_APP_API_KEY;
        const res = await axios.post(
          `${apiUrl}/api/v1/jobs`,
          {
            company,
            position,
            status,
          },
          {
            headers: {
              Authorization: "Bearer " + storedUser.token,
            },
          }
        );
        navigate("/#jobs");
        navigate(0);
      }
    } catch (error) {
      setDataError(error.response.data.msg);
    }
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Add New Job</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="add">
        <form onSubmit={addProd}>
          <div className="input-container">
            <label htmlFor="company" className="rounded-label">
              Company Name:
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={handleCompanyChange}
              className="rounded-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="post" className="rounded-label">
              Position:
            </label>
            <input
              type="text"
              id="post"
              value={position}
              onChange={handlePositionChange}
              className="rounded-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="pending" className="rounded-label">
              Status:
            </label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={handleStatusChange}
              className="rounded-input"
            />
          </div>
          <div className="input-container">
            <button type="submit" className="rounded-button">
              Add Job
            </button>
          </div>
        </form>
        {/* {token && <div className="token">Token: {token}</div>} */}
        {dataError && <div className="error">Error: {dataError}</div>}
      </div>
    </>
  );
};

export default AddProd;
