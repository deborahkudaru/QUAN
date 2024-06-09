import React from "react";
import logo from "../images/logo.png";
import Header from "./Header";
import "../styles/styles.css"
import About from "./About";
import Gallery from "./Gallery";

const Body = () => {
  return (
    <div className=" bg-no-repeat  bg-contain md:bg-cover md:bg-center bg-black bg-opacity-50 bg-blend-overlay background">
      <Header />
      <img className="md:w-96 md:m-auto md:py-48  w-40 m-auto pt-72 pb-5 " src={logo} alt="Quan Imagery" />
      <About />
      <Gallery />
    </div>
  );
};

export default Body;
