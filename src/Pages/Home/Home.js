import React from "react";
import "./Home.css";
import Profile from "../../Components/Profile/Profile";
import RecomendedJob from "../../Components/RecomendedJob/RecomendedJob";
import RecentApplied from "../../Components/RecentApplied/RecentApplied";

const Home = () => {
  return (
    <div className="main--container">
      <Profile />
      <RecomendedJob />
      <RecentApplied />
    </div>
  );
};

export default Home;
