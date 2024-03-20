import React from "react";
import logo from "../images/logo.png";
import Header from "./Header";


const Body = () => {
  return (
    <div className="bg-sza bg-no-repeat bg-contain md:bg-cover md:bg-center bg-fixed bg-black bg-opacity-70 bg-blend-overlay">
      <Header />
      <img className="md:w-96 md:m-auto md:py-48  w-44 m-auto pt-44 pb-10 " src={logo} alt="Quan Imagery" />
     
    </div>
  );
};

export default Body;
