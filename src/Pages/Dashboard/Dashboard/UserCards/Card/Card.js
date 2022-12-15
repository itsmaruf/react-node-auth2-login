import React from "react";
import user from "./user.png";
import { BiTrendingUp } from "react-icons/bi";
import "./Card.css";

const Card = ({ data }) => {
  const { noOfVisit, increase } = data;
  return (
    <div className="card border">
      <div className="card-body">
        <img src={user} className="w-5" alt="" />
        <p className="text-xs">Users Visit</p>
        <h2 className="text-primary text-3xl font-bold">{noOfVisit}</h2>
        <p className="text-xs flex items-center">
          <span className="text-green-400 flex items-center">
            <BiTrendingUp /> {increase}
          </span>
          <span className="inline-block ml-1">from Last Week</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
