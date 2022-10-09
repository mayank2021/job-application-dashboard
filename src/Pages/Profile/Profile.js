import React, { useContext } from "react";
import "./Profile.css";
import user from "../../Images/user.png";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { ProfileData, setProfileData, updateProfile } =
    useContext(UserContext);

  return (
    <div className="job-main--container">
      <h1>Your Profile</h1>
      <div className="profile-container">
        <img src={user} alt="user" />
        <div className="input-main--container">
          <div className="input--container">
            <label>Name</label>
            <input
              type="text"
              value={ProfileData.name}
              onChange={(e) =>
                setProfileData({ ...ProfileData, name: e.target.value })
              }
            />
          </div>
          <div className="input--container">
            <label>Job you're looking for?</label>
            <input
              type="text"
              value={ProfileData.role}
              onChange={(e) =>
                setProfileData({ ...ProfileData, role: e.target.value })
              }
            />
          </div>
          <div className="input--container">
            <label>Country</label>
            <input
              type="text"
              value={ProfileData.country}
              onChange={(e) =>
                setProfileData({ ...ProfileData, country: e.target.value })
              }
            />
          </div>
          <button onClick={updateProfile}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
