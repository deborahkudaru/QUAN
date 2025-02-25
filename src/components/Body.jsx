import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css";
import About from "./About";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import Album from "../pages/Album";

const Body = () => {
  const photo20 =
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514541/WhatsApp_Image_2025-02-24_at_19.07.51_qthzo8.jpg";
  const photo18 =
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514541/WhatsApp_Image_2025-02-24_at_19.08.11_bsvflw.jpg";
  const photo24 =
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514540/WhatsApp_Image_2025-02-24_at_19.08.04_pg0cm7.jpg";
  const photo4 =
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514540/WhatsApp_Image_2025-02-24_at_19.08.05_dktemd.jpg";
  const photo26 =
    "https://res.cloudinary.com/dqflr6fmv/image/upload/v1740514539/WhatsApp_Image_2025-02-24_at_19.07.15_xdjiv9.jpg";

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
        <img
          className="md:w-96 m-auto xl:pt-48 lg:pt-32 pt-40 w-1/2"
          src={logo}
          alt="Quan Imagery"
          loading="lazy"
        />
        <TfiAngleDoubleDown className="text-white animate-bounce text-center w-full m-auto relative xl:top-12 lg:top-12 top-12 text-3xl lg:text-4xl lg:pb-0 pb-2" />
      </div>
      <About />
      <Album />
    </div>
  );
};

export default Body;
