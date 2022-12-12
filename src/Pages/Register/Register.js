import React, { useEffect } from "react";
import topShape from "./shape-top.svg";
import bottomShape from "./shape-bottom.svg";
import logo from "./logo.svg";
import img from "./img.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const ClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
// const ClientSecret = process.env.CLIENT_SECRET;

const Register = () => {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("Login Successful, Current User:", res.profileObj);
    navigate("/dashboard");
  };

  const onFailure = (res) => {
    console.log("Login Failed, Res:", res);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: ClientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="w-full mx-auto min-h-screen flex lg:flex-row flex-col justify-between items-center overflow-hidden">
      <div className="lg:w-1/2 w-full flex justify-start items-center min-h-screen bg-white">
        <div className="card lg:w-1/2 w-1/3 mx-auto">
          <h2 className="text-2xl text-black">Sign up</h2>
          <p className="fs-14 poppins muted">
            Enter details to create your account
          </p>

          <form action="" className="mt-5">
            <div className="form-group">
              <label htmlFor="">Your name</label>
              <input
                type="text"
                name="name"
                className="w-full input input-bordered my-2"
                placeholder="Enter your name"
                id="name"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">E-mail or phone numbers</label>
              <input
                type="text"
                name="name"
                className="w-full input input-bordered my-2"
                placeholder="Email or Phone"
                id="eop"
              />
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div className="lg:w-1/2 w-full form-group mt-4 lg:mr-2">
                <label htmlFor="">Password</label>
                <div className="flex input input-bordered items-center justify-between my-2">
                  <input
                    type="password"
                    className="w-full"
                    name="password"
                    placeholder="••••••••"
                    id="pass1"
                  />
                  <AiOutlineEyeInvisible />
                </div>
              </div>
              <div className="lg:w-1/2 w-full form-group mt-4 lg:ml-2">
                <label htmlFor="">Confirm Password</label>
                <div className="flex input input-bordered items-center justify-between my-2">
                  <input
                    type="password"
                    className="w-full"
                    name="password"
                    placeholder="••••••••"
                    id="pass2"
                  />
                  <AiOutlineEyeInvisible />
                </div>
              </div>
            </div>

            <button className="btn w-full bg-blue-800 border-0 mt-5">
              Sign up
            </button>
            {/* <button className="btn w-full btn-outline mt-7">
              <img src={google} className="inline-block mr-2" alt="" />
              Sign in with Google
            </button> */}
          </form>

          <div className="btn btn-outline hover:bg-transparent mt-5">
            <GoogleLogin
              clientId={ClientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
              isSignedIn={true}
            />
          </div>

          <p className="my-5 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-500 ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full min-h-screen right relative text-right">
        <img src={topShape} className="topShape" alt="" />
        <img src={bottomShape} className="bottomShape" alt="" />
        <div className="p-10">
          <img src={logo} className="ml-auto" alt="" />

          <div className="mt-64">
            <h2 className="text-white text-4xl font-semibold">
              Automate your message service
            </h2>
            <p className="mt-8 fs-14 text-white w-2/3 ml-auto">
              Make your tasks easy with Loopmee by an automated integration
              along with your contacts
            </p>
            <img src={img} className="bottom-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
