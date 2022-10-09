import React from "react";
import AppliedCard from "../AppliedCard/AppliedCard";
import { RecentlyAppliedData } from "../../Data/RecentlyAppliedData";

const RecentApplied = () => {
  return (
    <div className="primary-container">
      <div className="primary-text">
        <h4>Recently applied jobs</h4>
      </div>
      {RecentlyAppliedData.map((ele) => (
        <AppliedCard
          key={ele.key}
          img={ele.img}
          title={ele.title}
          status={ele.status}
          descrip={ele.descrip}
          appliedDate={ele.appliedDate}
        />
      ))}
    </div>
  );
};

export default RecentApplied;
