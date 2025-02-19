import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const NavLinks = () => (
  <ul className="flex space-x-5 nav">
    {["HOME", "BOOK", "PORTFOLIO", "BLOG"].map((name, index) => (
      <li key={index}>
        <Link
          to={
            name === "BLOG"
              ? "/no-page"
              : name === "HOME"
              ? "/"
              : `/${name.toLowerCase().replace(" ", "-")}`
          }
          className="text-black dark:text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
        >
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const BlackNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        {/* Desktop Navigation */}
        <div className="w-full justify-between hidden lg:flex">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-black dark:text-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl focus:outline-none"
          >
            {isOpen ? <IoIosClose /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (only rendered when isOpen is true) */}
      {isOpen && (
        <motion.ul
          className="flex gap-7 flex-col items-end fixed right-0 top-16 bg-white dark:bg-[#121212] w-full pb-8 pr-4 shadow-lg z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {["HOME", "BOOK", "PORTFOLIO", "BLOG"].map((name, index) => (
            <motion.li key={index} whileTap={{ scale: 0.9 }}>
              <Link
                to={
                  name === "BLOG"
                    ? "/no-page"
                    : name === "HOME"
                    ? "/"
                    : `/${name.toLowerCase()}`
                }
                className="text-black dark:text-white hover:text-red-800 transition text-sm duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default BlackNavBar;
