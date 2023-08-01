import React from "react";
import Book from "./Book";
const books = [
  { name: "book1", auther: "saad", id: 1 },
  { name: "book22", auther: "saad0", id: 2 },
  { name: "boo33", auther: "saad1", id: 3 },
];
const Comp = () => {
  return (
    <div>
      {books.map((props) => {
        return <Book {...props} key={props.id} />;
      })}
    </div>
  );
};

export default Comp;
