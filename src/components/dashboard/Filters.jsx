import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const filterButtons = [
  {id: 1, label: "Time Frame", value: "All-time" },
  {id: 2, label: "People", value: "All" },
  {id: 3, label: "Category", value: "All" },
]

const Filters = () => {
  return (
    <div className="flex font-playFair w-full">
      {filterButtons.map((button) => (
        <div key={button.id} className="bg-white flex justify-between px-4 py-2 mr-2">
          <button className="text-gray-600 hover:text-gray-900">
            {button.label}: <span className="font-semibold text-black">{button.value}</span>
          </button>
          <IoMdArrowDropdown className="ml-2 self-center text hover:text-gray-900" />
        </div>
      ))}
      {/* <div className="bg-white flex">
        <button>
          Time Frame: <span className="">All-time</span>
        </button>
        <IoMdArrowDropdown  className="self-center" />
      </div> */}
    </div>
  );
};

export default Filters;
