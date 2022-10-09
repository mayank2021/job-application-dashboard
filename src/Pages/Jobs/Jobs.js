import React, { useContext, useState } from "react";
import "./Jobs.css";
import Toppane from "../../Components/Toppane/Toppane";
import JobSearchBar from "../../Components/JobSearchBar/JobSearchBar";
import JobCard from "../../Components/JobCard/JobCard";
import SavedJobs from "../../Components/SavedJobs/SavedJobs";
import { UserContext } from "../../context/UserContext";

const Jobs = () => {
  const [showFilteredResult, setShowFilteredResult] = useState("fe");
  const [activeTab, setActiveTab] = useState(1);

  const { jobData } = useContext(UserContext);
  return (
    <div className="job-main--container">
      <h1>Search Jobs</h1>
      <Toppane activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 ? (
        <>
          <JobSearchBar setShowFilteredResult={setShowFilteredResult} />
          {jobData.map((ele) => {
            if (ele.shortHand === showFilteredResult) {
              return (
                <JobCard
                  key={ele.key}
                  img={ele.img}
                  title={ele.title}
                  descrip={ele.descrip}
                  salary={ele.salary}
                  posted={ele.posted}
                  apply={true}
                  ele={ele}
                  buttons={true}
                />
              );
            }
          })}
        </>
      ) : (
        <SavedJobs />
      )}
    </div>
  );
};

export default Jobs;
