import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import { CiMenuFries } from "react-icons/ci";
// import { X } from "lucide-react";
import { TiDelete } from "react-icons/ti";

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
            {isOpen ? <TiDelete  className=""/> : <FiMenu className="" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-5 flex-col items-end  basis-full absolute right-5 top-20">
          <li>
            <Link
              to="/album"
              className="text-white   transition  text-sm duration-300 font-semibold "
            >
              ALBUM
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="text-white transition text-sm duration-300 font-semibold "
            >
              BOOK
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-white transition text-sm duration-300 font-semibold "
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/no-page"
              className="text-white transition text-sm duration-300 font-semibold "
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