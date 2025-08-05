import React from "react";
import { motion } from "framer-motion";
import { LiaUserSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="mx-4 border-b border-gray-300 md:mx-7">
      <div className="flex justify-end py-3 md:py-3.5">
        <motion.button
          className="p-1 border border-gray-700 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="User profile"
        >
          <LiaUserSolid className="text-xl text-gray-700 md:text-2xl" />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;