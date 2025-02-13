import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const NavLinks = () => (
  <ul className="flex space-x-5 nav">
    {["HOME", "BOOK A SESSION", "PORTFOLIO", "BLOG"].map((name, index) => (
      <li key={index}>
        <Link
          to={name === "BLOG" ? "/no-page" : `/${name.toLowerCase().replace(" ", "-")}`}
          className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="w-full justify-between hidden lg:flex">
          <NavLinks />
        </div>
        <div className="lg:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="object-right text-4xl">
            {isOpen ? <IoIosClose /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <motion.ul
        className="flex gap-5 flex-col text-right absolute right-5 top-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        {["HOME", "BOOK", "PORTFOLIO", "BLOG"].map((name, index) => (
          <motion.li key={index} whileTap={{ scale: 0.9 }}>
            <Link
              to={name === "BLOG" ? "/no-page" : `/${name.toLowerCase()}`}
              className="text-white transition text-sm duration-300 font-semibold font-playFair"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
