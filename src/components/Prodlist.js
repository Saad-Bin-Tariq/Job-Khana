import React from "react";

const Prodlist = ({ company, position, status, _id }) => {
  return (
    <div
      className="col-xl-2 col-md-3 d-flex align-items-stretch mt-4 "
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="icon-box">
        <div className="icon">
          <i className="bx bx-layer"></i>
        </div>
        <h4>
          <a href="">{company}</a>
        </h4>

        <p>Post: {position}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default Prodlist;
