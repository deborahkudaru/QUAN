import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-transparent mx-auto flex w-full justify-between flex-wrap lg:px-20 px-5 py-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Logo />
        </motion.div>
        <div className="flex gap-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="self-center"
          >
            <Navbar />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <DarkModeToggle />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
