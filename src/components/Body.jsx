import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import Album from "../pages/Album";
import { Link } from "react-router-dom";

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
        className="relative bg-black transition-all duration-1000"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-black bg-opacity-50 bg-blend-overlay transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: isLoaded ? 1 : 0
          }}
        />

        <div className="relative z-10">
          <Header />

          {/* Bottom Positioned Content */}
          <div className="flex flex-col justify-end items-center min-h-screen pb-32">
            <motion.div 
              className="w-full flex justify-center px-4 sm:px-6 md:px-8"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <img
                className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-md mb-4"
                src={logo}
                alt="Quan Imagery"
                loading="lazy"
              />
            </motion.div>

            <motion.div 
              className="mb-10 w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              onClick={scrollToAbout}
            >
              <TfiAngleDoubleDown className="text-white animate-bounce text-2xl sm:text-3xl lg:text-4xl" />
            </motion.div>
            <div>
              <Link to='/book' className="text-white font-lato font-semibold lg:text-xl text-sm relative text-end hover:underline hover:text-red-800">
              BOOK A SESSION
              </Link>
            </div>
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
