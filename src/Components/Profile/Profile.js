import React, { useContext } from "react";
import "./Profile.css";
import User from "../../Images/user.png";
import { UserContext } from "../../context/UserContext";

const Profile = ({ styleClass }) => {
  const { updatedProfileData } = useContext(UserContext);
  return (
    <div className={`profile-main--container ${styleClass}`}>
      <div className="profile-right--container">
        <img src={User} alt="user" />
      </div>
      <div className="profile-left--container">
        <h2>{updatedProfileData.name}</h2>
        <h5>{updatedProfileData.role}</h5>
        <p>{updatedProfileData.country}</p>
      </div>
    </div>
  );
};

export default Profile;
