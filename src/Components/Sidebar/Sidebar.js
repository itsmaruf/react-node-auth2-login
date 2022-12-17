import React from "react";
import "./Sidebar.css";
import logo from "./logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BiPieChartAlt2, BiCog } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiFileEditFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  AiOutlineLineChart,
  AiOutlineFileText,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: GrHomeRounded,
      to: "/dashboard",
    },
    {
      name: "Campaign",
      icon: BiPieChartAlt2,
      to: "/dashboard/campaigns",
    },
    {
      name: "Contacts",
      icon: FiUsers,
      to: "/dashboard/contacts",
    },
    {
      name: "Analytics",
      icon: AiOutlineLineChart,
      to: "/dashboard/analytics",
    },
    {
      name: "Reports",
      icon: AiOutlineFileText,
      to: "/dashboard/reports",
    },
    {
      name: "Billing",
      icon: FaMoneyBillWave,
      to: "/dashboard/billing",
    },
    {
      name: "Documents",
      icon: RiFileEditFill,
      to: "/dashboard/documents",
    },
  ];
  const support = [
    {
      name: "Settings",
      icon: BiCog,
    },
    {
      name: "Help Center",
      icon: AiOutlineQuestionCircle,
    },
  ];
  return (
    <div className="sidebar br-c">
      <div className="logo-holder bg-c p-4">
        <img src={logo} alt="" />
      </div>

      <div className="menu-holder p-4">
        <p className="text-sm text-gray-700 px-6">General</p>
        <ul className="my-5">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className="flex items-center p-2 hover:bg-violet-200 rounded-md px-5 sidebar-menu-item"
                end
              >
                <item.icon className="mr-2" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-700 px-6 mt-10">Support</p>
        <ul className="my-5">
          {support.map((item, index) => (
            <li key={index}>
              <Link
                to="/"
                className="flex items-center p-2 hover:bg-violet-200 rounded-md px-5"
              >
                <item.icon className="mr-2" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
