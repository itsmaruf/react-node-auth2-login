import React from "react";
import DataTable from "./DataTable/DataTable";
import ProgressTable from "./ProgressTable/ProgressTable";

const Tables = () => {
  return (
    <div className="flex lg:flex-row flex-col py-10">
      <div className="lg:w-7/12 lg:pr-4">
        <div className="card border">
          <div className="card-body">
            <DataTable />
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 lg:pl-4">
        <div className="card border">
          <div className="card-body">
            <ProgressTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
