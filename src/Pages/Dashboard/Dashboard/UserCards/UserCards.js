import React from "react";
import Card from "./Card/Card";

const UserCards = () => {
  const userTempObject = [
    {
      noOfVisit: "12,320",
      increase: "14%",
    },
    {
      noOfVisit: "12,320",
      increase: "14%",
    },
    {
      noOfVisit: "12,320",
      increase: "14%",
    },
    {
      noOfVisit: "12,320",
      increase: "14%",
    },
  ];
  return (
    <div className="py-10 grid lg:grid-cols-4 grid-cols-2 gap-6">
      {userTempObject.map((item, index) => {
        return <Card key={index} data={item}></Card>;
      })}
    </div>
  );
};

export default UserCards;
