import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

// Animation variants for desktop nav links
const desktopNavVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const linkVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Mobile menu variants - keeping animations contained
const mobileMenuVariants = {
  closed: { 
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: { 
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, y: -5 },
  open: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring", 
      stiffness: 150, 
      damping: 20
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "BOOK A SESSION", "PORTFOLIO", "BLOG"];

  return (
    <div className="relative">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="w-full justify-between hidden lg:flex">
          <motion.ul 
            className="flex space-x-5 nav" 
            variants={desktopNavVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((name, index) => (
              <motion.li key={index} variants={linkVariant}>
                <Link
                  to={
                    name === "BLOG"
                      ? "/no-page"
                      : name === "HOME"
                      ? "/"
                      : name === "BOOK A SESSION"
                      ? "/book"
                      : `/${name.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-white hover:underline-offset-4 transition duration-300 font-bold font-playFair hover:underline"
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="lg:hidden text-white">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="object-right text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <IoIosClose /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu with contained animations */}
      <motion.div
        className="overflow-hidden lg:hidden absolute right-0 top-14 z-50 w-auto"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.ul
          className="flex gap-3 flex-col items-end pt-2 pb-2 px-1"
        >
          {navItems.map((name, index) => (
            <motion.li 
              key={index}
              variants={mobileItemVariants}
              className="w-full"
            >
              <Link
                to={
                  name === "BLOG"
                    ? "/no-page"
                    : name === "HOME"
                    ? "/"
                    : name === "BOOK A SESSION"
                    ? "/book"
                    : `/${name.toLowerCase().replace(" ", "-")}`
                }
                className="text-white text-sm block text-right font-semibold font-playFair py-2 px-4 bg-black bg-opacity-70 rounded"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;