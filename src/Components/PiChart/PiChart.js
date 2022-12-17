import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./PiChart.css";

const data = [
  { name: "Group A", value: 10 },
  { name: "Group B", value: 15 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 10 },
  { name: "Group D", value: 10 },
];

const COLORS = ["#E371E7", "#571159", "#A8B8D8", "#FFFFFF", "#A8A2A5"];

const PiChart = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600 font-bold">Reached Audience</h2>
        <BiDotsHorizontalRounded className="text-xl" />
      </div>
      <PieChart width={400} height={295} className="mx-auto">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="red"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="divider"></div>

      <div className="flex lg:flex-row flex-col justify-between items-start">
        <div className="item">
          <div className="flex justify-start items-center">
            <div className="ind men"></div>
            Men
          </div>
          <h2 className="text-3xl font-bold">48%</h2>
        </div>
        <div className="item">
          <div className="flex justify-start items-center">
            <div className="ind women"></div>
            Women
          </div>
          <h2 className="text-3xl font-bold">20%</h2>
        </div>
        <div className="item">
          <div className="flex justify-start items-center">
            <div className="ind children"></div>
            Children
          </div>
          <h2 className="text-3xl font-bold">18%</h2>
        </div>
        <div className="item">
          <div className="flex justify-start items-center">
            <div className="ind other"></div>
            Other
          </div>
          <h2 className="text-3xl font-bold">15%</h2>
        </div>
      </div>
    </>
  );
};

export default PiChart;
