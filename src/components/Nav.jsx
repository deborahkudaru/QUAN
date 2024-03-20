import React, { useRef } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <h3>logo</h3>
      <nav>
        <a href="">About</a>
        <a href="">contact</a>
        <a href=""></a>
        <a href=""></a>
        <button>
          <HiMiniBars3BottomRight />
        </button>
      </nav>
      <button>
        <FaTimes />
      </button>
    </div>
  );
};

export default Nav;
