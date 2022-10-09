import React from "react";
import "./Message.css";

const Message = ({ app }) => {
  return (
    <div
      className="message-main--container"
      style={{ background: app.background, borderColor: app.border }}
    >
      <div className="message-left--container">
        <img src={app.img} alt="status" />
      </div>
      <div className="message-right--container">
        <h4>{app.title}</h4>
        <p>{app.descrip}</p>
      </div>
    </div>
  );
};

export default Message;
