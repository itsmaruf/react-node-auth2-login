import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const ClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
// const ClientSecret = process.env.CLIENT_SECRET;

const Dashboard = () => {
  const navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    console.log("Logout Successful");
    navigate("/login");
  };

  return (
    <div>
      <div className="btn btn-outline hover:bg-transparent mt-5">
        <GoogleLogout
          clientId={ClientId}
          buttonText="Log Out"
          onLogoutSuccess={onLogoutSuccess}
        />
      </div>
    </div>
  );
};

export default Dashboard;
