import React from "react";
import { BsTools } from "react-icons/bs";
import {
  FaEnvelopeOpenText,
  FaShoppingBasket,
  FaGlobeAmericas,
} from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import CampaignCard from "../../Components/CampaignCard/CampaignCard";

const Campaigns = () => {
  const campaignData = [
    {
      id: 1,
      name: "Custom Workflow",
      desc: "Mix & match triggers, conditions & actions",
      icon: BsTools,
    },
    {
      id: 2,
      name: "Welcome Message",
      desc: "Mix & match triggers, conditions & actions",
      icon: FaEnvelopeOpenText,
    },
    {
      id: 3,
      name: "Product Promo",
      desc: "Mix & match triggers, conditions & actions",
      icon: MdCake,
    },
    {
      id: 4,
      name: "Custom Workflow",
      desc: "Mix & match triggers, conditions & actions",
      icon: FaShoppingBasket,
    },
    {
      id: 5,
      name: "Welcome Message",
      desc: "Mix & match triggers, conditions & actions",
      icon: FaGlobeAmericas,
    },
    {
      id: 6,
      name: "Product Promo",
      desc: "Mix & match triggers, conditions & actions",
      icon: FiMonitor,
    },
  ];
  return (
    <div className="p-10">
      <div className="text-center">
        <h2 className="font-semibold text-2xl text-primary">
          Create Your Campaign
        </h2>
        <p className="text-lg text-gray-600 font-medium">Choose a workflow</p>

        <div className="campaign-cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-9/12 mx-auto mt-10 gap-10">
          {campaignData.map((item, index) => (
            <CampaignCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
