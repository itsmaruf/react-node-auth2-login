import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./CompositeChart.css";
const data = [
  {
    name: "Page A",
    uv: 40,
    pv: 10,
  },
  {
    name: "Page B",
    uv: -60,
    pv: 90,
  },
  {
    name: "Page C",
    uv: 100,
    pv: 30,
  },
  {
    name: "Page D",
    uv: 190,
    pv: 190,
  },
  {
    name: "Page E",
    uv: 100,
    pv: 300,
  },
  {
    name: "Page F",
    uv: -20,
    pv: 290,
  },
  {
    name: "Page G",
    uv: 50,
    pv: 350,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 250,
  },
  {
    name: "Page G",
    uv: 100,
    pv: 300,
  },
  {
    name: "Page G",
    uv: 130,
    pv: 350,
  },
  {
    name: "Page G",
    uv: 100,
    pv: 400,
  },
];

const CompositeChart = () => {
  return (
    <AreaChart
      width={800}
      height={400}
      data={data}
      className="composite-chart"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#580F5A" stopOpacity={1} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#000000"
        strokeWidth={2}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#571159"
        strokeWidth={3}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default CompositeChart;
