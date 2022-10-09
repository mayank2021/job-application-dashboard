import React from "react";
import "./Header.css";
import Profile from "../../Images/user.png";

const Header = () => {
  return (
    <div className="header">
      <h1>Dream</h1>
      <img src={Profile} alt="user" />
    </div>
  );
};

export default Header;
