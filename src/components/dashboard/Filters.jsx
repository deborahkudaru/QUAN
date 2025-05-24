import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const filterButtons = [
  { id: 1, label: "Time Frame", value: "Last 7 days", options: ["Today", "Last 7 days", "Last 30 days", "Last 3 months", "All time"] },
  { id: 2, label: "User Type", value: "All Users", options: ["All Users", "New Users", "Returning Users"] },
  { id: 3, label: "Location", value: "All Countries", options: ["All Countries", "United States", "Europe", "Asia", "Americas"] },
];

const Filters = ({ onFilterChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleFilterSelect = (filterId, value) => {
    onFilterChange(filterId, value);
    setActiveDropdown(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-playFair p-4">
      {filterButtons.map((button) => (
        <div key={button.id} className="relative">
          <button
            onClick={() => setActiveDropdown(activeDropdown === button.id ? null : button.id)}
            className="bg-white flex items-center justify-between px-4 py-2 rounded-2xl shadow-sm border border-gray-200 w-full hover:shadow-md transition-shadow"
          >
            <p className="flex items-center text-gray-600">
              {button.label}:{" "}
              <span className="ml-1 font-semibold text-black">{button.value}</span>
            </p>
            <IoMdArrowDropdown 
              className={`text-xl text-gray-600 transition-transform ${
                activeDropdown === button.id ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {activeDropdown === button.id && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
              {button.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleFilterSelect(button.id, option)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
