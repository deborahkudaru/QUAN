import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <ul className="flex space-x-5 nav pr-20">
      <li>
        <Link
          to="/finder"
          className="text-white hover:underline-offset-4 transition duration-300 font-bold "
        >
          ALBUM
        </Link>
      </li>
      <li>
        <Link
          to="/employer"
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
    <Router>
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
        <ul className="flex gap-1 nav flex-col items-end basis-full">
          <li>
            <Link
              to="/finder"
              className="text-white   transition text-sm duration-300 font-semibold "
            >
              ALBUM
            </Link>
          </li>
          <li>
            <Link
              to="/employer"
              className="text-white transition text-sm duration-300 font-semibold "
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
      <Routes>
        <Route path="/album" render={() => <div>Album Page</div>} />
        <Route path="/contact" render={() => <div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
