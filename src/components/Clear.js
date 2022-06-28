import React from "react";
import "./Clear.css";

const Clear = ({ onClick }) => {
  return (
    <div className="clear-btn" onClick={onClick}>
      Clear
    </div>
  );
};

export default Clear;
