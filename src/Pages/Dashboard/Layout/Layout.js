import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../../Components/DashboardHeader/DashboardHeader";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-start items-start layout-bg">
      <Sidebar></Sidebar>
      <div className="main-body w-full">
        <DashboardHeader></DashboardHeader>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
