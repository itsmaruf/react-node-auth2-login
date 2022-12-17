import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const FilterableTableR = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [user, setUser] = useState([]);
  const initUsers = [
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
    {
      name: "Pattrick Leach",
      email: "pattrick@example.com",
      phone: "(001) 564-7845",
      lead: "Online Store",
      company: "Google",
      contactOwner: "James Dean",
    },
  ];

  // setUser(initUsers);

  useEffect(() => {
    setUser(initUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // setUser(initUsers);
  console.log(user);

  return (
    <div>
      <div className="mt-4 lg:flex justify-between items-center">
        <div className="lg:w-1/3 w-full">
          <form action="">
            <div className="input-group input-bordered rounded-md px-3 bg-gray-100 border-gray-500 overflow-hidden p-1">
              <CiSearch />
              <input
                type="text"
                className="input focus:outline-none bg-transparent"
                placeholder="Search contacts"
                name=""
                id=""
              />
            </div>
          </form>
        </div>

        <div className="lg:w-2/3 w-full text-right flex justify-end items-center">
          <p className="text-sm">Showing</p>
          <select name="" id="" className="bg-gray-100 p-2 mx-2 rounded-sm">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
          <p className="text-sm">of 574 Results</p>
        </div>
      </div>

      <table className="table w-full mt-5">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Contact name</th>
            <th>Contact</th>
            <th>Lead Source</th>
            <th>Company</th>
            <th>Contact owner</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="text-sm font-bold">{item.name}</td>
                <td>
                  <p className="text-sm">{item.email}</p>
                  <p className="text-xs">{item.phone}</p>
                </td>
                <td>
                  <p className="text-sm rounded-full bg-violet-200 px-3 py-1 text-center inline-block">
                    {item.lead}
                  </p>
                </td>
                <td>
                  <p className="text-sm">{item.company}</p>
                </td>
                <td>
                  <p className="text-sm">{item.contactOwner}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilterableTableR;
