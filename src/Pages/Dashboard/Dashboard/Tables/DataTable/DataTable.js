import React from "react";
import { BiFilterAlt, BiDotsVerticalRounded } from "react-icons/bi";
import "./DataTable.css";

const DataTable = () => {
  const tableData = [
    {
      name: "Strong World",
      start: "05/07/21",
      end: "09/07/21",
      status: "online",
    },
    {
      name: "Global Warming",
      start: "05/07/21",
      end: "09/07/21",
      status: "offline",
    },
    {
      name: "Hello World",
      start: "05/07/21",
      end: "09/07/21",
      status: "pending",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-600">Recent Campaign</h2>
        <button className="btn btn-outline btn-sm border-gray-600b text-gray-600">
          Filter & Short <BiFilterAlt />
        </button>
      </div>

      <div className="lg:overflow-hidden overflow-x-auto">
        <table className="table mt-4 w-full">
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.start}</td>
                <td>{data.end}</td>
                <td>
                  <button className={`btn btn-xs ${data.status} text-xs`}>
                    {data.status}
                  </button>
                </td>
                <td>
                  <button className="btn btn-xs bg-transparent text-black border-transparent">
                    <BiDotsVerticalRounded />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
