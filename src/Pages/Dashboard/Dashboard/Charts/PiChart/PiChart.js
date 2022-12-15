import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
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
      <h2 className="text-xl text-gray-600 font-bold">Reached Audience</h2>
      <PieChart width={400} height={420} className="mx-auto">
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
    </>
  );
};

export default PiChart;
