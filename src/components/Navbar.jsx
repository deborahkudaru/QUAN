import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import { CiMenuFries } from "react-icons/ci";
// import { TiDelete } from "react-icons/ti";
// import { X } from "lucide-react";
import { IoIosClose } from "react-icons/io";

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 nav">
      <li>
        <Link
          to="/"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          HOME
        </Link>
      </li>
      {/* <li>
        <Link
          to="/album"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          ALBUM
        </Link>
      </li> */}
      <li>
        <Link
          to="/book"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          BOOK A SESSION
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link
          to="/no-page"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          BLOG 
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
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
        <div className="lg:hidden text-white">
          <button onClick={toggleNavbar} className="object-right text-4xl">
            {isOpen ? <IoIosClose  className=""/> : <FiMenu className="" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-5 flex-col text-right absolute right-5 top-20 ">
          <li>
            <Link
              to="/"
              className="text-white   transition  text-sm duration-300 font-semibold font-playFair "
            >
              HOME
            </Link>
          </li>
          {/* <li>
            <Link
              to="/album"
              className="text-white   transition  text-sm duration-300 font-semibold font-playFair "
            >
              ALBUM
            </Link>
          </li> */}
          <li>
            <Link
              to="/book"
              className="text-white transition text-sm duration-300 font-semibold font-playFair "
            >
              BOOK
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-white transition text-sm duration-300 font-semibold font-playFair "
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/no-page"
              className="text-white transition text-sm duration-300 font-semibold font-playFair "
            >
              BLOG
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
