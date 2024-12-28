import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import { CiMenuFries } from "react-icons/ci";
// import { X } from "lucide-react";
import { IoIosClose } from "react-icons/io";

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 nav">
      <li>
        <Link
          to="/album"
          className="text-black hover:underline-offset-4 transition duration-300 font-bold xl:text-xl lg:text-lg font-mateSC hover:underline"
        >
          ALBUM
        </Link>
      </li>
      <li>
        <Link
          to="/book"
          className="text-black hover:underline-offset-4 transition duration-300 font-bold xl:text-xl lg:text-lg font-mateSC hover:underline"
        >
          BOOK A SESSION
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className="text-black hover:underline-offset-4 transition duration-300 font-bold xl:text-xl lg:text-lg font-mateSC hover:underline"
        >
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link
          to="/no-page"
          className="text-black hover:underline-offset-4 transition duration-300 font-bold xl:text-xl lg:text-lg font-mateSC hover:underline"
        >
          BLOG 
        </Link>
      </li>
    </ul>
  );
};

const BlackNavbBar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="w-full justify-between hidden lg:flex">
          <NavLinks />
        </div>
        <div className="lg:hidden text-black">
          <button onClick={toggleNavbar} className="object-right text-4xl">
            {isOpen ? <IoIosClose /> : <FiMenu className="" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-7 flex-col items-end  basis-full absolute right-1 top-20 bg-white w-full pb-20 pr-4">
          <li>
            <Link
              to="/album"
              className="text-black hover:text-blue-800 transition  text-sm duration-300 font-semibold "
            >
              ALBUM
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="text-black hover:text-blue-800 transition text-sm duration-300 font-semibold "
            >
              BOOK
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black hover:text-blue-800 transition text-sm duration-300 font-semibold "
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/no-page"
              className="text-black hover:text-blue-800 transition text-sm duration-300 font-semibold "
            >
              BLOG
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default BlackNavbBar;
