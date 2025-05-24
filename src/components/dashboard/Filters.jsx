import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Filters = () => {
  return (
    <div>
      <div className="bg-white ">
        <button>
          Time Frame <span>All-time</span>
        </button>
        <IoMdArrowDropdown />
      </div>
      <div>
        <button>
          People <span>All</span>
        </button>
        <IoMdArrowDropdown />
      </div>
      <div>
        <button>
          Time Frame <span>All-time</span>
        </button>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Filters;
