import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
// import { CiMenuFries } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
// import { X } from "lucide-react";

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 nav">
      <li>
        <Link
          to="/album"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold text-xl font-mateSC hover:underline"
        >
          ALBUM
        </Link>
      </li>
      <li>
        <Link
          to="/book"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold text-xl font-mateSC hover:underline"
        >
          BOOK A SESSION
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold text-xl font-mateSC hover:underline"
        >
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link
          to="/no-page"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold text-xl font-mateSC hover:underline"
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
            {isOpen ? <TiDelete  className=""/> : <FiMenu className="" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-5 flex-col text-right absolute right-5 top-20 ">
          <li>
            <Link
              to="/album"
              className="text-black   transition  text-sm duration-300 font-semibold "
            >
              ALBUM
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="text-black transition text-sm duration-300 font-semibold "
            >
              BOOK
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black transition text-sm duration-300 font-semibold "
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/no-page"
              className="text-black transition text-sm duration-300 font-semibold "
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
