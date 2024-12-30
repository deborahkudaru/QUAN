import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import Gallery from "./Gallery";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import photo20 from "../images/photo20.jpg";
import photo18 from "../images/photo18.jpg";
import photo24 from "../images/photo24.jpg";
import photo4 from "../images/photo4.jpg";
import photo26 from "../images/KWP_0568.jpg";

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
        className=" bg-no-repeat bg-cover md:bg-cover md:bg-center bg-black bg-opacity-50 bg-blend-overlay transition-all duration-1000 pb-10"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <Header />
        <img
          className="md:w-96 md:m-auto md:py-48  w-60 m-auto pt-40 pb-2 lg:pt-20 lg:pb-40"
          src={logo}
          alt="Quan Imagery"
        />
        <TfiAngleDoubleDown className="text-white animate-bounce text-center w-full m-auto relative top-8 text-3xl lg:text-4xl" />
      </div>
      <About />
      <Gallery />
    </div>
  );
};

export default Body;
