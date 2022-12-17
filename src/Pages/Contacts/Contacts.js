import React from "react";
import FilterableTableR from "../../Components/FilterableTable/FilterableTableR";
import { FaSort } from "react-icons/fa";
import { BsBoxArrowUp } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="p-6">
      <div className="p-10 bg-white">
        <h2 className="text-2xl font-bold text-primary">Contacts</h2>
        <p className="font-sm mb-4 text-gray-600">Manage your contacts</p>
        <div className="flex lg:flex-row flex-col justify-between items-center mb-5">
          <div className="w-full lg:w-4/12 flex justify-between items-center">
            <button className="btn btn-outline btn-sm">
              Create Date <FaSort className="ml-2" />
            </button>
            <button className="btn btn-outline btn-sm">
              Contact Owner <FaSort className="ml-2" />
            </button>
            <button className="btn btn-outline btn-sm">
              More Filter <FaSort className="ml-2" />
            </button>
          </div>
          <div className="w-full lg:w-8/12 text-right">
            <button className="btn btn-outline btn-sm">
              Export <BsBoxArrowUp className="ml-2" />
            </button>
            <button className="btn btn-primary btn-sm ml-4">
              Create New Contact <AiFillPlusCircle className="ml-2" />
            </button>
          </div>
        </div>
        <FilterableTableR />
      </div>
    </div>
  );
};

export default Contacts;
