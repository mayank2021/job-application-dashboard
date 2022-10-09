import React, { useState } from "react";
import "./AppliedCard.css";
import Modal from ".././Modal/Modal";

const AppliedCard = ({ img, title, status, appliedDate, descrip, ele }) => {
  const [modalData, setModalData] = useState({});

  let clickable = window.location.pathname === "/applications";

  return (
    <>
      <div
        className="jobcard-main--container"
        onClick={() => (clickable ? setModalData(ele) : null)}
        style={{ cursor: clickable ? "pointer" : null }}
      >
        <div className="jobcard-right--container">
          <img src={img} alt="company-logo" />
        </div>
        <div className="jobcard-left--container">
          <h3>{title}</h3>
          <h5>{descrip}</h5>
          <div className="status-container">
            <p
              className="status-dot"
              style={{
                background:
                  status === "accepted"
                    ? "#38E54D"
                    : status === "pending"
                    ? "#FFB200"
                    : "red",
              }}
            ></p>
            <p>{status}</p>
            <p>{appliedDate}</p>
          </div>
        </div>
      </div>
      {modalData.key ? (
        <Modal
          ele={modalData}
          setModalData={setModalData}
          status={ele.status}
        />
      ) : null}
    </>
  );
};

export default AppliedCard;
