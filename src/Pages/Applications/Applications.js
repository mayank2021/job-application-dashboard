import React, { useContext } from "react";
import AppliedCard from "../../Components/AppliedCard/AppliedCard";
import { UserContext } from "../../context/UserContext";

const Applications = () => {
  const { appliedJobs } = useContext(UserContext);

  return (
    <div className="job-main--container">
      <h1>Applications</h1>
      {appliedJobs.map((ele) => (
        <>
          <AppliedCard
            key={ele.key}
            img={ele.img}
            title={ele.title}
            status={ele.status}
            descrip={ele.descrip}
            appliedDate={ele.appliedDate}
            ele={ele}
          />
        </>
      ))}
    </div>
  );
};

export default Applications;
