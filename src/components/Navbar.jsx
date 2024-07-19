import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { X } from "lucide-react";

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
          BOOK
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
          <button onClick={toggleNavbar} className="object-right">
            {isOpen ? <X /> : <CiMenuFries className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-5 relative flex-col items-end  basis-full">
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
        </ul>
      )}
    </>
  );
};

export default Navbar;
