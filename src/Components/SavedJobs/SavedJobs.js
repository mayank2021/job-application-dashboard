import React, { useContext } from "react";
import "./SavedJobs.css";
import { savedJobsData } from "../../Data/SavedJobsData";
import JobCard from "../JobCard/JobCard";
import { UserContext } from "../../context/UserContext";

const SavedJobs = () => {
  const { savedJobData } = useContext(UserContext);
  return (
    <div className="saved-job-container">
      {savedJobsData.length ? (
        savedJobData.map((ele) => (
          <JobCard
            key={ele.key}
            img={ele.img}
            title={ele.title}
            descrip={ele.descrip}
            salary={ele.salary}
            posted={ele.posted}
            apply={true}
          />
        ))
      ) : (
        <p>no saved jobs</p>
      )}
    </div>
  );
};

export default SavedJobs;
