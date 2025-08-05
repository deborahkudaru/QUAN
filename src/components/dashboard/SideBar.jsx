import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiTwotonePicture } from "react-icons/ai";
import { IoSettingsOutline, IoLogOutOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../../images/blacklogo.png";

const SideBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      icon: AiTwotonePicture,
      label: "Library",
      path: "/dashboard/library",
    },
    {
      icon: IoSettingsOutline,
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  const handleLogout = () => {
    alert("Logged out!");
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMobileMenu}
        className="fixed z-50 p-2 bg-white border rounded-md shadow-lg top-4 left-4 md:hidden"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoCloseOutline className="w-6 h-6 text-gray-700" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoMenuOutline className="w-6 h-6 text-gray-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="flex-col justify-between hidden w-64 h-full min-h-screen bg-white border-r shadow-sm md:flex font-playFair p-7">
        <div>
          <div className="mb-10">
            <Link to="/">
              <img src={logo} alt="logo" className="w-6 md:w-8" />
            </Link>
          </div>
          <ul className="flex flex-col mt-10 font-medium text-gray-700 gap-7">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);

              return (
                <motion.li 
                  key={index} 
                  className="flex gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <IconComponent className="self-center" />
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                      active
                        ? "bg-gray-800 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10">
          <motion.button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 transition-colors duration-200 hover:text-gray-900"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoLogOutOutline className="self-center" />
            Log Out
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col justify-between h-full font-playFair p-7">
              <div>
                <div className="mt-12 mb-10">
                  <Link to="/" onClick={closeMobileMenu}>
                    <img src={logo} alt="logo" className="w-6 md:w-8" />
                  </Link>
                </div>
                <motion.ul 
                  className="flex flex-col mt-10 font-medium text-gray-700 gap-7"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                >
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const active = isActive(item.path);

                    return (
                      <motion.li 
                        key={index} 
                        className="flex gap-3"
                        variants={menuItemVariants}
                      >
                        <IconComponent className="self-center text-xl" />
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={`px-4 py-3 rounded-md transition-colors duration-200 text-lg ${
                            active
                              ? "bg-gray-800 text-white"
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
              <div className="mt-10">
                <motion.button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-lg text-gray-700 transition-colors duration-200 hover:text-gray-900"
                  whileTap={{ scale: 0.95 }}
                >
                  <IoLogOutOutline className="self-center text-xl" />
                  Log Out
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;