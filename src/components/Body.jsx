import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import photo20 from "../images/photo20.jpg";
import photo18 from "../images/photo18.jpg";
import photo24 from "../images/photo24.jpg";
import photo4 from "../images/photo17.jpg";
import photo26 from "../images/KWP_0568.jpg";
import Album from "../pages/Album";
import { Suspense } from "react";

const Body = () => {
  const images = [photo20, photo18, photo24, photo4, photo26];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div
        className=" bg-no-repeat bg-cover md:bg-cover md:bg-center lg:bg-top bg-black bg-opacity-50 bg-blend-overlay transition-all duration-1000 lg:pb-0 pb-10 lg:min-h-screen"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <img
            className="md:w-96 m-auto xl:pt-32 lg:pt-32 pt-40 w-1/2"
            src={logo}
            alt="Quan Imagery"
            loading="lazy"
          />
        </Suspense>
        <TfiAngleDoubleDown className="text-white animate-bounce text-center w-full m-auto relative xl:top-12 top-12 text-3xl lg:text-4xl lg:pb-0 pb-2" />
      </div>
      <About />
      <Album />
    </div>
  );
};

export default Body;
