import React, { useEffect } from "react";
import photo13 from "../images/photo13.jpg";
import photo19 from "../images/photo19.jpg";
import photo6 from "../images/photo6.jpg";
import photo8 from "../images/photo8.jpg";
import photo9 from "../images/photo9.jpg";
import photo11 from "../images/photo11.jpg";
import photo12 from "../images/photo12.jpg";
import photo15 from "../images/photo15.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-white">
      <h3 className=" text-center pt-20 pb-10 font-bold text-2xl lg:text-3xl font-mateSC">
        GALLERY
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 gap-5">
        <img className="w-full" src={photo9} alt="" />

        <img className="w-full" src={photo13} alt="" />

        <img className="w-full" src={photo19} alt="" />

        <img className="w-full" src={photo12} alt="" />

        <img className="w-full" src={photo11} alt="" />

        <img className="w-full" src={photo6} alt="" />

        <img className="w-full" src={photo8} alt="" />

        <img className="w-full" src={photo15} alt="" />
        
      </div>
      <div className="flex justify-end mt-5 px-5 gap-2">
        <Link
          to="/album"
          className="text-black  font-mateSC font-semibold lg:text-xl text-sm relative hover:underline"
        >
          VIEW MORE
        </Link>
        <GoArrowRight className="text-2xl animate-pulse"/>
      </div>
    </div>
  );
};

export default Gallery;
