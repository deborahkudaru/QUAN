import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import Album from "../pages/Album";

const Body = () => {
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
  const aboutRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className="relative transition-all duration-1000 bg-black"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover bg-blend-overlay"
          style={{ 
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: isLoaded ? 1 : 0
          }}
        />

        <div className="relative z-10">
          <Header />

          {/* Bottom Positioned Content */}
          <div className="flex flex-col items-center justify-end min-h-screen pb-32">
            <motion.div 
              className="flex justify-center w-full px-4 sm:px-6 md:px-8"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <img
                className="w-1/2 max-w-md mb-4 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5"
                src={logo}
                alt="Quan Imagery"
                loading="lazy"
              />
            </motion.div>

            <motion.div 
              className="flex justify-center w-full mb-10 cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              onClick={scrollToAbout}
            >
              <TfiAngleDoubleDown className="text-2xl text-white animate-bounce sm:text-3xl lg:text-4xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section with ref */}
      <div ref={aboutRef}>
        <About />
      </div>
      
      <Album />
    </motion.div>
  );
};

export default Body;
