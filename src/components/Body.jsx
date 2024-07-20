import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import Gallery from "./Gallery";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import photo20 from "../images/photo20.jpg";
import photo18 from "../images/photo18.jpg";
import photo14 from "../images/photo14.jpg";
import photo4 from "../images/photo4.jpg"

const Body = () => {
  const images = [photo20, photo18, photo14, photo4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className=" bg-no-repeat bg-contain md:bg-cover md:bg-center bg-black bg-opacity-50 bg-blend-overlay background transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <Header />
      <img
        className="md:w-96 md:m-auto md:py-48  w-40 m-auto pt-52 pb-5 lg:pt-20 lg:pb-40"
        src={logo}
        alt="Quan Imagery"
      />
      <TfiAngleDoubleDown className="text-white animate-bounce text-center w-full m-auto relative lg:bottom-5  md:bottom-5 md:text-3xl lg:text-4xl" />
      <About />
      <Gallery />
    </div>
  );
};

export default Body;
