import React, { useState } from "react";

const initialNodes = [
  {
    id: "A",
    type: "group",
    data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: "B",
    type: "input",
    data: { label: "child node 1" },
    position: { x: 10, y: 10 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "C",
    data: { label: "child node 2" },
    position: { x: 10, y: 90 },
    parentNode: "A",
    extent: "parent",
  },
];

const initialEdges = [{ id: "b-c", source: "B", target: "C" }];

const SubFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  return <div></div>;
};

export default SubFlow;
