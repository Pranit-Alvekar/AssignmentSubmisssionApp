import React from "react";
import "../App.css";
import Home from "../Components/Home";

import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

const Homepage = () => {
  return (
    <div className="App">
    <Home />
    
    <Work />
    <Testimonial />
    <Contact />
    
  </div>
  );
};

export default Homepage;
