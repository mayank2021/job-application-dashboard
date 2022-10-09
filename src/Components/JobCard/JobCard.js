import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./JobCard.css";

const JobCard = ({
  img,
  descrip,
  title,
  salary,
  posted,
  apply,
  buttons,
  styleClass,
  ele,
}) => {
  const { saveJob, handleApply } = useContext(UserContext);
  return (
    <div className={`jobcard-main--container ${styleClass}`}>
      <div className="jobcard-right--container">
        <img src={img} alt="company-logo" />
      </div>
      <div className="jobcard-left--container">
        <h3>{title}</h3>
        <h5>{descrip}</h5>
        <p>{salary}</p>
        {posted ? <span>Posted: {posted}</span> : null}
      </div>
      {buttons ? (
        <div className="button-container">
          <button className="primary" onClick={() => saveJob(ele)}>
            Save
          </button>
          {apply ? (
            <button className="secondary" onClick={() => handleApply(ele)}>
              Apply
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default JobCard;
