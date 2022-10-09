import React from "react";
import "./JobSearchBar.css";

const JobSearchBar = ({ setShowFilteredResult }) => {
  return (
    <div>
      <select
        className="job-search--input"
        name="dev"
        id="dev"
        onChange={(e) => setShowFilteredResult(e.target.value)}
      >
        <option value="fe">Frontend Engineer</option>
        <option value="be">Backend Engineer</option>
      </select>
    </div>
  );
};

export default JobSearchBar;
