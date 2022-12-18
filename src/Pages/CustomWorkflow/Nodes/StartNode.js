import React from "react";
import { Handle, Position } from "reactflow";
import { BsArrowReturnRight } from "react-icons/bs";

import "./Nodes.css";

const StartNode = () => {
  const isValidConnection = (connection) => connection.target === "greeting";
  return (
    <div className="start-node">
      <button className="btn btn-primary text-white rounded-full">
        <BsArrowReturnRight className="mr-2" />
        Start Flow
      </button>

      <Handle
        id="start-source"
        type="source"
        // target="greeting"
        position={Position.Right}
        isValidConnection={isValidConnection}
      ></Handle>
    </div>
  );
};

export default StartNode;
