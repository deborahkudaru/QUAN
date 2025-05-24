import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const filterButtons = [
  { id: 1, label: "Time Frame", value: "All-time" },
  { id: 2, label: "People", value: "All" },
  { id: 3, label: "Category", value: "All" },
];

const Filters = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-playFair p-4">
      {filterButtons.map((button) => (
        <button
          key={button.id}
          className="bg-white flex items-center justify-between px-4 py-2 rounded-2xl shadow-sm border border-gray-200"
        >
          <p
            className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {button.label}:{" "}
            <span className="ml-1 font-semibold text-black">{button.value}</span>
          </p>
          <IoMdArrowDropdown className="text-xl text-gray-600 hover:text-gray-900" />
        </button>
      ))}
    </div>
  );
};

export default Filters;
