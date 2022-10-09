import React from "react";
import "./Modal.css";
import JobCard from "../../Components/JobCard/JobCard";
import Profile from "../../Components/Profile/Profile";
import Message from "../Message/Message";
import Accepted from "../../Images/accept.png";
import Rejected from "../../Images/cross.png";
import Pending from "../../Images/clock.png";

const Modal = ({ ele, status, setModalData }) => {
  console.log(ele, "h");
  let accepted = {
    img: Accepted,
    title: "Application Accepted",
    descrip: "Your application is accepted. Continue the conversation.",
    background: "rgba(125, 206, 19, 0.1)",
    border: "#7DCE13",
  };
  let rejected = {
    img: Rejected,
    title: "Application Not Accepted",
    descrip: "Your application was  reviewed, but they did not accept it.",
    background: "rgba(210, 0, 26, 0.1)",
    border: "#D2001A",
  };
  let pending = {
    img: Pending,
    title: "Application Pending",
    descrip:
      "Your application is awaiting. We’ll notify you when they make a decision.",
    background: "rgba(253, 132, 31, 0.1) ",
    border: "#FD841F",
  };
  let app;

  const state = () => {
    if (status === "accepted") {
      app = accepted;
    } else if (status === "pending") {
      app = pending;
    } else if (status === "not accepted") {
      app = rejected;
    }
  };
  state();
  return (
    <div className="modal">
      <button
        className="cancel--button"
        onClick={() => setModalData({ ...ele, key: null })}
      >
        cancel
      </button>
      <div className="modal-content">
        <JobCard
          key={ele.key}
          img={ele.img}
          title={ele.title}
          descrip={ele.descrip}
          salary={ele.salary}
          posted={ele.posted}
          apply={true}
          ele={ele}
          buttons={false}
          styleClass={"job-detail-modal"}
        />
        <Profile styleClass={"job-detail-profile"} />
        <Message status={status} app={app} />
      </div>
    </div>
  );
};

export default Modal;
