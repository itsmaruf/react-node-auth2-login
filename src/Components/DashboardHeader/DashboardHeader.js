import React from "react";
import { GoogleLogout } from "react-google-login";
import { BiSearch, BiBell } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import user from "./user.png";
import "./DashboardHeader.css";

const ClientId = process.env.REACT_APP_AUTH_CLIENT_ID;

const DashboardHeader = () => {
  const navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    console.log("Logout Successful");
    navigate("/login");
  };
  return (
    <div className="w-full bg-white bg-c">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="flex-1">
          <div className="form-control">
            <div className="input-group border-2 rounded-lg overflow-hidden">
              <button className="btn btn-square bg-white text-black border-none hover:bg-white">
                <BiSearch className="text-2xl text-gray-500" />
              </button>
              <input
                type="text"
                placeholder="Search…"
                className="input pl-0 focus:shadow-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <Link to="/dashboard/message" className="btn btn-ghost btn-circle">
            <FiMessageSquare className="text-2xl text-gray-500" />
          </Link>
          <div className="dropdown dropdown-end">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary"></span>
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <BiBell className="text-2xl text-gray-500" />
              </label>
            </div>

            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-sm">No New Notifications</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <span>Will Smith</span>
              <TfiAngleDown className="ml-2" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <GoogleLogout
                  clientId={ClientId}
                  buttonText="Log Out"
                  onLogoutSuccess={onLogoutSuccess}
                  icon={false}
                  style={{ boxShadow: "0 0 transparent" }}
                  className="logout-btn"
                />
              </li>
            </ul>
          </div>
          {/* <GoogleLogout
            clientId={ClientId}
            buttonText="Log Out"
            onLogoutSuccess={onLogoutSuccess}
            icon={false}
            style={{ boxShadow: "0 0 transparent" }}
            className="logout-btn btn btn-ghost"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
