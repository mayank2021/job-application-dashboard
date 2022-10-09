import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Toppane.css";

const Toppane = ({ activeTab, setActiveTab }) => {
  const { savedJobData } = useContext(UserContext);
  return (
    <div className="toppane-container">
      <p
        className={`${activeTab === 1 ? "active-tab" : null}`}
        onClick={() => setActiveTab(1)}
      >
        All
      </p>
      <p
        className={`${activeTab === 2 ? "active-tab" : null}`}
        onClick={() => setActiveTab(2)}
      >
        Saved {savedJobData.length}
      </p>
    </div>
  );
};

export default Toppane;
