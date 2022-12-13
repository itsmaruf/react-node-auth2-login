import React, { useEffect, useState } from "react";
// import google from "./Google.svg";
import topShape from "./shape-top.svg";
import bottomShape from "./shape-bottom.svg";
import logo from "./logo.svg";
import img from "./img.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";

// importing google login service

import { GoogleLogin } from "react-google-login";

const ClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
// const ClientSecret = process.env.CLIENT_SECRET;

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: ClientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      email,
      password,
    };
    // console.log(userData);
    fetch(`http://localhost:8000/api/v1/verify?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      mode: "cors",
      // body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.token);
      });
    // form.reset();
  };

  // const googleSignIn = () => {
  //   console.log("Sigining in...");
  // };

  const onSuccess = (res) => {
    console.log("Login Successful, Current User:", res.profileObj);
    navigate("/dashboard");
  };
  const onFailure = (res) => {
    console.log("Login Failed, Res:", res);
  };

  const [type, setType] = useState("password");
  const typeChanger = () => {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    }
  };

  return (
    <div className="w-full mx-auto min-h-screen flex lg:flex-row flex-col-reverse justify-between items-center overflow-hidden">
      <div className="lg:w-1/2 w-full flex justify-start items-center min-h-screen bg-white">
        <div className="card lg:w-1/2 w-full lg:p-0 p-4 mx-auto">
          <h2 className="text-2xl text-black">Sign in</h2>
          <p className="fs-14 poppins muted">
            Enter your credentials to access to your account
          </p>

          <form action="" className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                className="w-full input input-bordered my-2"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">Password</label>
              <div className="flex input input-bordered items-center justify-between my-2 overflow-hidden">
                <input
                  type={type}
                  className="w-full input bg-transparent border-0 outline-0 shadow-none focus:border-0 focus:outline-0 focus:shadow-none"
                  name="password"
                  placeholder="••••••••"
                  id="pass"
                  required
                />
                <AiOutlineEyeInvisible onClick={typeChanger} />
              </div>
            </div>

            <div className="flex justify-between items-center my-5">
              <div className="flex justify-start items-center">
                <input type="checkbox" name="" id="remember" />{" "}
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>

              <a href="/">
                <label htmlFor="" className="text-blue-500">
                  Forgot Password?
                </label>
              </a>
            </div>

            <button className="btn w-full bg-blue-800 border-0">Sign in</button>
          </form>
          {/* <button
            onClick={googleSignIn}
            className="btn w-full btn-outline mt-7"
          >
            <img src={google} className="inline-block mr-2" alt="" />
            Sign in with Google
          </button> */}

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
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 ml-2">
              Sign up
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

export default Login;
