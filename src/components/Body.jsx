import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import Album from "../pages/Album";

const Body = () => {
  // Photo gallery
  const images = [
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514541/WhatsApp_Image_2025-02-24_at_19.07.51_qthzo8.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514541/WhatsApp_Image_2025-02-24_at_19.08.11_bsvflw.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514540/WhatsApp_Image_2025-02-24_at_19.08.04_pg0cm7.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514540/WhatsApp_Image_2025-02-24_at_19.08.05_dktemd.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652073/Siza_alpha_lmsqv2.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652054/photo18_r2glgk.jpg",
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1739652035/photo9_ecopxv.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      setIsLoaded(true);
    };
    preloadImages();
  }, []);

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Variants for animations
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className="relative bg-black transition-all duration-1000"
        style={{ minHeight: "100vh" }}
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-black bg-opacity-50 bg-blend-overlay transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: isLoaded ? 1 : 0
          }}
        />

        {/* Content container */}
        <div className="relative z-10">
          <Header />
          
          {/* Logo container with improved responsiveness */}
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              className="w-full flex justify-center px-4 sm:px-6 md:px-8"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <img
                className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-md mt-24 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-40"
                src={logo}
                alt="Quan Imagery"
                loading="lazy"
              />
            </motion.div>
            
            {/* Scroll indicator with responsive positioning */}
            <motion.div 
              className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 mb-8 md:mb-0 w-full flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <TfiAngleDoubleDown className="text-white animate-bounce text-2xl sm:text-3xl lg:text-4xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <About />
      <Album />
    </motion.div>
  );
};

export default Body;