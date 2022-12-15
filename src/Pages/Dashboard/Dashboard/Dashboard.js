import React from "react";
import "./Dashboard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsBoxArrowUp } from "react-icons/bs";
import UserCards from "./UserCards/UserCards";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="min-h-full bg-white p-10">
        <div className="flex justify-between items-center">
          <div className="user">
            <h2 className="text-xl font-semibold text-blue">
              Hi, <span>Will Smith</span>
            </h2>
            <p className="text-gray-500 text-sm">Welcome to Loopmee</p>
          </div>
          <div className="date-info flex justify-end items-center">
            <button className="btn btn-outline btn-sm mr-3">
              <FaRegCalendarAlt className="mr-2 text-xl text-gray-500" />{" "}
              <span className="text-xs text-gray-500">
                Jul 05, 2021 - Jul 06, 2021
              </span>
            </button>
            <button className="btn btn-blue btn-sm">
              Export <BsBoxArrowUp />
            </button>
          </div>
        </div>

        <UserCards></UserCards>
      </div>
    </div>
  );
};

export default Dashboard;
