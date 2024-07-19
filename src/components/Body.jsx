import React from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css"
import About from "./About";
import Gallery from "./Gallery";
import { TfiAngleDoubleDown } from "react-icons/tfi";

const Body = () => {
  return (
    <div className=" bg-no-repeat bg-contain md:bg-cover md:bg-center bg-black bg-opacity-50 bg-blend-overlay background">
      <Header />
      <img className="md:w-96 md:m-auto md:py-48  w-40 m-auto pt-52 pb-5 lg:pt-20 lg:pb-40" src={logo} alt="Quan Imagery" />
      <TfiAngleDoubleDown className="text-white animate-bounce text-center w-full m-auto relative lg:bottom-5  md:bottom-5 md:text-3xl lg:text-4xl"/>
      <About />
      <Gallery />
    </div>
  );
};

export default Body;
