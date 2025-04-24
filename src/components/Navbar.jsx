import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

// Mobile menu variants for fullscreen effect
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, y: 20 },
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
    <div className="relative z-50">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-50"
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
            className="object-right text-4xl z-50 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <IoIosClose className="text-white" /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu with blur background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 lg:hidden z-40 backdrop-blur-md bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full flex items-center justify-center"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
            >
              <motion.ul className="flex flex-col items-center justify-center gap-8 w-full">
                {navItems.map((name, index) => (
                  <motion.li 
                    key={index}
                    variants={mobileItemVariants}
                    className="w-full text-center"
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
                      className="text-white text-2xl font-bold font-playFair py-3 block tracking-wider"
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;