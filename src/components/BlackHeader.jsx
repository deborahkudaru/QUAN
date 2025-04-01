import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "aos/dist/aos.css";
import BlackLogo from "./BlackLogo";
import BlackNavbBar from "./BlackNavbar";
import DarkModeToggle from "./DarkModeToggle";

const BlackHeader = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-10 backdrop-blur-md transition-all duration-500 ${
        isScrolled ? "bg-white/80 dark:bg-[#121212]/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full justify-between items-center flex-wrap lg:px-20 px-5 py-3">
        <motion.div whileHover={{ scale: 1.05 }}>
          <BlackLogo />
        </motion.div>
        <div className="flex gap-2 items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <BlackNavbBar />
          </motion.div>
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <DarkModeToggle />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default BlackHeader;
