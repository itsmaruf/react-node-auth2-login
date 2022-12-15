import React from "react";
import "./Sidebar.css";
import logo from "./logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar br-c">
      <div className="logo-holder bg-c p-4">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
