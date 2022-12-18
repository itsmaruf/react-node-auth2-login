import React, { useEffect, useState } from "react";
import { AiFillMessage, AiOutlineMore, AiOutlineClose } from "react-icons/ai";

import "./Nodes.css";
const ResultNode = ({ data }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);
  const [localStorageData, setLocalStorageData] = useState({});

  const [moduleVisibility, setModuleVisibility] = useState(false);
  useEffect(() => {
    setLocalStorageData(localStorage);
    // console.log(localStorageData);
  }, [localStorageData]);

  const visibilityHandler = () => {
    setBtnVisibility(!btnVisibility);
    // console.log(btnVisibility);
  };

  const deleteNode = (id) => {
    data.deleteNode(id);
  };

  const resultToggler = () => {
    setModuleVisibility(!moduleVisibility);
  };

  return (
    <div className="greeting-node result-node relative shadow">
      <div>
        {/* <Handle type="target" position={Position.Left} style={leftTop}></Handle> */}

        <div className="node-header flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="text-primary border rounded p-1 mr-4 h-auto">
              <AiFillMessage />
            </div>
            <p className="text-lg font-bold">Result</p>
          </div>
          <button
            onClick={visibilityHandler}
            className="btn bg-transparent border-0 text-black text-lg p-0 hover:bg-transparent"
          >
            {!btnVisibility ? <AiOutlineMore /> : <AiOutlineClose />}
          </button>
        </div>
        <div className="node-body">
          {!moduleVisibility && (
            <button
              onClick={resultToggler}
              className="btn btn-primary my-8 block text-white w-full mx-auto"
            >
              View Result
            </button>
          )}

          {moduleVisibility && (
            <div className="node-module">
              <div className="border border-gray p-3 rounded-md my-3">
                <p className="font-bold">Greeting</p>

                <p>
                  {localStorageData.text1
                    ? localStorageData.text1.replaceAll('"', "")
                    : "Empty Message"}
                </p>
                <p>
                  {localStorageData.text2
                    ? localStorageData.text2.replaceAll('"', "")
                    : "Empty Message"}
                </p>
              </div>

              <div className="border border-gray p-3 rounded-md my-3">
                <p className="font-bold">Selected Catalogue</p>

                <p>
                  {localStorageData.catalog
                    ? localStorageData.catalog.replaceAll('"', "")
                    : "Empty Message"}
                </p>
              </div>

              <div className="border border-gray p-3 rounded-md my-3">
                <p className="font-bold">Package info</p>

                <p>
                  {localStorageData.package_id
                    ? localStorageData.package_id.replaceAll('"', "")
                    : "Empty Message"}
                </p>
                <p>
                  {localStorageData.reply_id
                    ? localStorageData.reply_id.replaceAll('"', "")
                    : "Empty Message"}
                </p>
              </div>
            </div>
          )}
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

export default ResultNode;
