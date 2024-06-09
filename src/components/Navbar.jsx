import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { X } from "lucide-react";

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 nav pr-20">
      <li>
        <Link
          to="/album"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold "
        >
          ALBUM
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold "
        >
          CONTACT
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
        <div className="w-full justify-between hidden  md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="object-right text-white">
            {isOpen ? <X /> : <CiMenuFries className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex gap-5 nav relative z-10 flex-col items-end  basis-full">
          <li>
            <Link
              to="/album"
              className="text-white   transition text-sm duration-300 font-semibold "
            >
              ALBUM
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white transition text-sm duration-300 font-semibold "
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
