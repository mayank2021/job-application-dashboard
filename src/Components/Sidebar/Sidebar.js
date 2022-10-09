import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const path = window.location.pathname;
  return (
    <div className="sidebar--container">
      <h5>Menu</h5>
      <Link className="sidebar-link" to="/">
        {" "}
        <p
          className={`${path === "/" ? "active-link" : null}`}
          // onClick={() => setActiveLink("home")}
        >
          Home
        </p>
      </Link>
      <Link className="sidebar-link" to="/profile">
        {" "}
        <p
          className={`${path === "/profile" ? "active-link" : null}`}
          onClick={() => setActiveLink("profile")}
        >
          Profile
        </p>
      </Link>
      <Link className="sidebar-link" to="/jobs">
        {" "}
        <p
          className={`${path === "/jobs" ? "active-link" : null}`}
          onClick={() => setActiveLink("job")}
        >
          Job
        </p>
      </Link>
      <Link className="sidebar-link" to="/applications">
        {" "}
        <p
          className={`${path === "/applications" ? "active-link" : null}`}
          onClick={() => setActiveLink("application")}
        >
          Applications
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
