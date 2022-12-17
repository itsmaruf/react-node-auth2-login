import React from "react";
import CompositeChart from "../../../../Components/CompositeChart/CompositeChart";
import PiChart from "../../../../Components/PiChart/PiChart";

const Charts = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-7/12 lg:pr-4">
        <div className="card border">
          <div className="card-body">
            <CompositeChart />
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 lg:pl-4">
        <div className="card border">
          <div className="card-body">
            <PiChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
