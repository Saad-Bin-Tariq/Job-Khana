import React from "react";

const Book = ({ name, auther }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{auther}</p>
    </div>
  );
};

export default Book;
