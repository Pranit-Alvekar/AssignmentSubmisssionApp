/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("Current pathname:", pathname);

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {pathname !== "/" && (<a href="">Home</a>)}
        

        <a href="">About</a>
        {pathname !== "/login" && (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="primary-button1"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
