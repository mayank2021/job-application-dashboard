import React, { useState, createContext } from "react";
import { savedJobsData } from "../Data/SavedJobsData";
import { AppliedJobData } from "../Data/appliedJobs";
import { JobsData } from "../Data/JobsData";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [savedJobData, setSavedJobData] = useState(savedJobsData);
  const [appliedJobs, setAppliedJobs] = useState(AppliedJobData);
  const [jobData, setJobData] = useState(JobsData);
  const [ProfileData, setProfileData] = useState({
    name: "Mayank Sonkar",
    role: "Frontend Engineer",
    country: "India",
  });
  const [updatedProfileData, setUpdatedProfileData] = useState(ProfileData);

  //update profile
  const updateProfile = () => {
    setUpdatedProfileData(ProfileData);
    alert("Profile updated!");
  };

  //saved or not
  const checkSaved = (ele) => {
    let ans = savedJobData.map((el) => {
      if (el.key === ele.key) return true;
      else return false;
    });
    return ans;
  };
  //save job
  const saveJob = (ele) => {
    if (checkSaved(ele)[0]) {
      alert("Job already Saved");
    } else {
      setSavedJobData([...savedJobData, ele]);
      alert("Job Saved");
    }
  };

  const getCurrentDate = () => {
    let d = new Date();
    let date = d.getDate();
    let m = d.getMonth();
    let y = d.getFullYear();
    return `${date}/${m}/${y}`;
  };
  //applied jobs
  const handleApply = (ele) => {
    setJobData(jobData.filter((el) => el.key !== ele.key));
    alert("Applied to - " + ele.descrip);
    setAppliedJobs([
      ...appliedJobs,
      { ...ele, status: "pending", appliedDate: getCurrentDate() },
    ]);
  };
  return (
    <UserContext.Provider
      value={{
        saveJob,
        savedJobData,
        appliedJobs,
        handleApply,
        jobData,
        ProfileData,
        setProfileData,
        updatedProfileData,
        updateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
