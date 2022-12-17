import React from "react";
import "./ProgressItem.css";

const ProgressItem = ({ item }) => {
  const { title, percentage } = item;
  return (
    <div className="my-5">
      {title}
      <progress
        className="progress progress-primary w-100"
        value={percentage}
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressItem;
