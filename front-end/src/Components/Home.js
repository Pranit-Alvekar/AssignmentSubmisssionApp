import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            A streamlined assignment submission app
          </h1>
          <p className="primary-text">
            
This App stands as a testament to innovation, education, 
and technological prowess. It caters to the evolving needs of educational institutions, 
promoting collaborative learning, skill enhancement, and continuous improvement.
          </p>
          <button 
          onClick={() => {
            navigate("/register");
          }}
          className="secondary-button">
            Register <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
