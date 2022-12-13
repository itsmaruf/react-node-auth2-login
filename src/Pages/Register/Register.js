import React, { useEffect, useState } from "react";
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

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    const userData = {
      email,
      password,
    };
    // console.log(userData);
    fetch("http://localhost:8000/api/v1/verify/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      mode: "cors",
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      });
    form.reset();
  };

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

  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");
  const typeChanger = () => {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    }
  };
  const typeChanger2 = () => {
    if (type2 === "password") {
      setType2("text");
    } else if (type2 === "text") {
      setType2("password");
    }
  };

  return (
    <div className="w-full mx-auto min-h-screen flex lg:flex-row flex-col-reverse justify-between items-center overflow-hidden">
      <div className="lg:w-1/2 w-full flex justify-start items-center min-h-screen bg-white">
        <div className="card lg:w-1/2 w-full lg:p-0 p-4 mx-auto">
          <h2 className="text-2xl text-black">Sign up</h2>
          <p className="fs-14 poppins muted">
            Enter details to create your account
          </p>

          <form action="" className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Your name</label>
              <input
                type="text"
                name="name"
                className="w-full input input-bordered my-2"
                placeholder="Enter your name"
                id="name"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                name="email"
                className="w-full input input-bordered my-2"
                placeholder="Email or Phone"
                id="eop"
                required
              />
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div className="lg:w-1/2 w-full form-group mt-4 lg:mr-2">
                <label htmlFor="">Password</label>
                <div className="flex input input-bordered items-center justify-between my-2">
                  <input
                    type={type}
                    className="w-full input bg-transparent border-0 outline-0 shadow-none focus:border-0 focus:outline-0 focus:shadow-none"
                    name="password"
                    placeholder="••••••••"
                    id="pass1"
                    required
                  />
                  <AiOutlineEyeInvisible onClick={typeChanger} />
                </div>
              </div>
              <div className="lg:w-1/2 w-full form-group mt-4 lg:ml-2">
                <label htmlFor="">Confirm Password</label>
                <div className="flex input input-bordered items-center justify-between my-2">
                  <input
                    type={type2}
                    className="w-full input bg-transparent border-0 outline-0 shadow-none focus:border-0 focus:outline-0 focus:shadow-none"
                    name="confirmPassword"
                    placeholder="••••••••"
                    id="pass2"
                    required
                  />
                  <AiOutlineEyeInvisible onClick={typeChanger2} />
                </div>
              </div>
            </div>

            <p className="text-error">{error}</p>

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
