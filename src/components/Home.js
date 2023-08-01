import React from "react";

import AboutUs from "./AboutUs";
import Landing from "./Landing";
import Products from "./products";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Landing />
      <AboutUs />
      <Products />
      <NewsLetter />
    </>
  );
};

export default Home;
