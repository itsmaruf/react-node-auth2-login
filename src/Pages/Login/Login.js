import React from "react";
import google from "./Google.svg";
import topShape from "./shape-top.svg";
import bottomShape from "./shape-bottom.svg";
import logo from "./logo.svg";
import img from "./img.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full mx-auto min-h-screen flex lg:flex-row flex-col justify-between items-center overflow-hidden">
      <div className="lg:w-1/2 w-full flex justify-start items-center min-h-screen bg-white">
        <div className="card lg:w-1/2 w-1/3 mx-auto">
          <h2 className="text-2xl text-black">Sign in</h2>
          <p className="fs-14 poppins muted">
            Enter your credentials to access to your account
          </p>

          <form action="" className="mt-5">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                className="w-full input input-bordered my-2"
                placeholder="Enter your email"
                id=""
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">Password</label>
              <div className="flex input input-bordered items-center justify-between my-2">
                <input
                  type="password"
                  className="w-full"
                  name="password"
                  placeholder="••••••••"
                  id=""
                />
                <AiOutlineEyeInvisible />
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
            <button className="btn w-full btn-outline mt-7">
              <img src={google} className="inline-block mr-2" alt="" />
              Sign in with Google
            </button>
          </form>

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