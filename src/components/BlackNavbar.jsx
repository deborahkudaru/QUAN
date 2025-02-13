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
        <div className="w-full justify-between hidden lg:flex">
          <NavLinks />
        </div>
        <div className="lg:hidden text-black dark:text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="object-right text-4xl">
            {isOpen ? <IoIosClose /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <motion.ul
        className="flex gap-7 flex-col items-end basis-full absolute right-1 top-20 bg-white dark:bg-[#121212] w-full pb-12 pr-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        {["HOME", "BOOK", "PORTFOLIO", "BLOG"].map((name, index) => (
          <motion.li key={index} whileTap={{ scale: 0.9 }}>
            <Link
              to={name === "BLOG" ? "/no-page" : `/${name.toLowerCase()}`}
              className="text-black dark:text-white hover:text-red-800 transition text-sm duration-300 font-semibold"
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

export default BlackNavBar;
