import React from "react";
import "./Sidebar.css";
import logo from "./logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiFileEditFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineLineChart, AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      name: "Home",
      icon: GrHomeRounded,
    },
    {
      name: "Campaign",
      icon: BiPieChartAlt2,
    },
    {
      name: "User",
      icon: FiUsers,
    },
    {
      name: "Analytics",
      icon: AiOutlineLineChart,
    },
    {
      name: "Reports",
      icon: AiOutlineFileText,
    },
    {
      name: "Billing",
      icon: FaMoneyBillWave,
    },
    {
      name: "Documents",
      icon: RiFileEditFill,
    },
  ];
  return (
    <div className="sidebar br-c">
      <div className="logo-holder bg-c p-4">
        <img src={logo} alt="" />
      </div>

      <div className="menu-holder p-4">
        <p className="text-sm text-gray-700">General</p>
        <ul className="mt-10">
          {
            // eslint-disable-next-line array-callback-return
            menu.map((item, index) => {
              <li key={index}>
                <Link to="/">x</Link>
              </li>;
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
