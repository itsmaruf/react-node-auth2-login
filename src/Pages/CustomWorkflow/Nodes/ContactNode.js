import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { AiFillMessage, AiOutlineMore, AiOutlineClose } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

import "./Nodes.css";
const ContactNode = ({ data }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);

  const leftTop = {
    top: 40,
  };

  const visibilityHandler = () => {
    setBtnVisibility(!btnVisibility);
    // console.log(btnVisibility);
  };

  const deleteNode = (id) => {
    data.deleteNode(id);
  };

  return (
    <div className="greeting-node relative shadow">
      <div>
        <Handle type="target" position={Position.Left} style={leftTop}></Handle>

        <div className="node-header flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="text-primary border rounded p-1 mr-4 h-auto">
              <AiFillMessage />
            </div>
            <p className="text-lg font-bold">Contact</p>
          </div>
          <button
            onClick={visibilityHandler}
            className="btn bg-transparent border-0 text-black text-lg p-0 hover:bg-transparent"
          >
            {!btnVisibility ? <AiOutlineMore /> : <AiOutlineClose />}
          </button>
        </div>
        <div className="node-body">
          <div className="node-module">
            <div className="border border-gray p-3 rounded-md">
              <a
                href="/"
                className="text-primary flex items-center justify-start"
              >
                <FaEnvelope className="mr-3" />
                dev@dev.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {btnVisibility && (
        <div className="node-menu absolute top-14 right-5">
          <button
            onClick={() => {
              deleteNode(data.id);
            }}
            className="btn btn-sm text-black hover:text-white text-xsm bg-white inline-block w-auto"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactNode;
