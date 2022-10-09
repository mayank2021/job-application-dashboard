import React from "react";
import "./RecomendedJob.css";
import JobCard from "../JobCard/JobCard";
import { RecomendedDataJobs } from "../../Data/RecomendedJobs";

const RecomendedJob = () => {
  return (
    <div className="primary-container">
      <div className="primary-text">
        <h4>Recommended Jobs</h4>
        <h5>Jobs where you're a top applicant based on your profile.</h5>
      </div>
      {RecomendedDataJobs.map((ele) => (
        <JobCard
          key={ele.key}
          img={ele.img}
          title={ele.title}
          descrip={ele.descrip}
          salary={ele.salary}
          posted={ele.posted}
          buttons={true}
          ele={ele}
        />
      ))}
    </div>
  );
};

export default RecomendedJob;
