import React, { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { AiFillMessage, AiOutlineMore, AiOutlineClose } from "react-icons/ai";

import "./Nodes.css";
const CatalogNode = ({ data }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);

  const leftTop = {
    top: 40,
  };

  const visibilityHandler = () => {
    setBtnVisibility(!btnVisibility);
    // console.log(btnVisibility);
  };

  const onChange = useCallback((evt) => {
    const value = evt.target.value;
    localStorage.setItem(evt.target.name, JSON.stringify(value));
    console.log(evt.target.value);
  }, []);

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
            <p className="text-lg font-bold">Catalogue</p>
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
            <select
              onChange={onChange}
              className="select border border-gray w-full"
              name="catalog"
              id=""
            >
              <option value="Catalogue 1" className="option">
                Catalogue 1
              </option>
              <option value="Catalogue 2" className="option">
                Catalogue 2
              </option>
              <option value="Catalogue 3" className="option">
                Catalogue 3
              </option>
            </select>
          </div>
          <div className="node-module">
            <div className="border border-gray p-2 rounded-md">
              <p className="text-sm">Here is the Link of Our Catalogue</p>
              <a href="/" className="text-primary cursor-all-scroll text-sm">
                http://localhost:3000/
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

export default CatalogNode;
