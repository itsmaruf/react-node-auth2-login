import React, { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import {
  AiFillMessage,
  AiOutlineMore,
  AiOutlineClose,
  AiFillCalendar,
} from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { GoPackage } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

import "./Nodes.css";
import TextArea from "../../Modules/TextArea";

const leftTop = {
  top: 40,
};

const GreetingNode = ({ data }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);

  const isValidConnectionCatalog = (connection) =>
    connection.target === "catalog";

  const isValidConnectionPackage = (connection) =>
    connection.target === "package";

  const isValidConnectionContact = (connection) =>
    connection.target === "contact";
  const visibilityHandler = () => {
    setBtnVisibility(!btnVisibility);
    // console.log(btnVisibility);
  };

  const deleteNode = (id) => {
    data.deleteNode(id);
  };

  const onChange = useCallback((evt) => {
    const value = evt.target.value;
    localStorage.setItem(evt.target.name, JSON.stringify(value));
    console.log(evt.target.value);
  }, []);

  return (
    <div className="greeting-node relative shadow">
      <div>
        <div className="node-header flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="text-primary border rounded p-1 mr-4 h-auto">
              <AiFillMessage />
            </div>
            <p className="text-lg font-bold">Greeting</p>
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
            <TextArea
              onChange={onChange}
              rows={1}
              name="text1"
              placeHolder={"write something"}
              value={"👋"}
            ></TextArea>
          </div>
          <div className="node-module">
            <TextArea
              onChange={onChange}
              rows={3}
              name="text2"
              placeHolder={"write something"}
              value={
                "Hey there! Welcome to our store, I'm your bot assistant. Let me know how can I help you:"
              }
            ></TextArea>
          </div>
          <div className="node-module">
            <div className="flex border p-2 rounded-md justify-start items-center">
              <HiCursorClick className="mr-4" />
              <AiFillCalendar className="mr-2" />
              <span className="font-bold">Catalogue</span>
            </div>
          </div>
          <div className="node-module">
            <div className="flex border p-2 rounded-md justify-start items-center">
              <HiCursorClick className="mr-4" />
              <GoPackage className="mr-2" />
              <span className="font-bold">Package Tracking</span>
            </div>
          </div>
          <div className="node-module">
            <div className="flex border p-2 rounded-md justify-start items-center">
              <HiCursorClick className="mr-4" />
              <FiPhoneCall className="mr-2" />
              <span className="font-bold">Contact Us</span>
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
      <Handle
        id="greeting-target"
        type="target"
        position={Position.Left}
        style={leftTop}
      ></Handle>
      <Handle
        id="greeting-source-1"
        type="source"
        position={Position.Right}
        style={{ top: 300 }}
        isValidConnection={isValidConnectionCatalog}
      ></Handle>
      <Handle
        id="greeting-source-2"
        type="source"
        position={Position.Right}
        style={{ top: 363 }}
        isValidConnection={isValidConnectionPackage}
      ></Handle>
      <Handle
        id="c"
        type="source"
        position={Position.Right}
        style={{ top: 425 }}
        isValidConnection={isValidConnectionContact}
      ></Handle>
    </div>
  );
};

export default GreetingNode;
