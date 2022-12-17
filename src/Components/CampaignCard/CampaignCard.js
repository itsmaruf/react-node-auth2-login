import React from "react";
import { Link } from "react-router-dom";

const CampaignCard = ({ item }) => {
  const { id, name, desc } = item;
  return (
    <Link to={`/dashboard/${id}`}>
      <div className="card border-none shadow-md rounded-md bg-white">
        <div className="card-body text-center flex flex-col justify-center items-center">
          <p className="text-lg">{name}</p>
          <item.icon className="text-6xl my-5 text-gray-400" />
          <p className="text-xs te3xt-gray-600">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
