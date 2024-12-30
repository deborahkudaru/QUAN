import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import niche from "../constants/niche";
import { Link } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="bg-white">
      <BlackHeader />
      <h3 className=" text-center pt-32 pb-10 font-bold text-2xl lg:text-3xl font-playFair text-gray-900 ">
        SOME OF MY WORK
      </h3>
      <div className="px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {niche.map((image) => (
          <div className="" key={image.id}>
            <Link>
              <div className="" data-aos="fade-up">
                <img src={image.img} alt="" className="shadow-xl" />
              </div>
              <div className="pt-4 leading-8 pb-2" data-aos="fade-up">
                <p className="text-lg font-bold font-playFair text-red-800">{image.topic}</p>
                <p className="text-red-800 font-semibold font-lato">Niche: <span className="text-gray-700 font-normal">{image.niche}</span></p>
                <p className="text-red-800 font-semibold font-lato">Date: <span className="text-gray-700 font-normal">{image.date}</span></p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
