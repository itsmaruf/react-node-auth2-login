import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ProgressItem from "../ProgressItem/ProgressItem";

const ProgressTable = () => {
  const progressData = [
    {
      title: "Google",
      percentage: 65,
    },
    {
      title: "Facebook",
      percentage: 82,
    },
    {
      title: "Twitter",
      percentage: 60,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-600">Top Traffic Source</h2>
        <BiDotsHorizontalRounded className="text-2xl" />
      </div>

      <div className="progressTable mt-4">
        {progressData.map((item, index) => (
          <ProgressItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgressTable;
