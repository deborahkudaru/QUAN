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
      <h3 className=" text-center pt-32 pb-10 font-bold text-2xl lg:text-3xl font-mateSC text-cyan-700  underline decoration-wavy decoration-rose-700 underline-offset-4">
        PORTFOLIO
      </h3>
      <div className="px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {niche.map((image) => (
          <div className="" key={image.id}>
            <Link>
              <div className="" data-aos="fade-up">
                <img src={image.img} alt="" className="shadow-xl" />
              </div>
              <div className="pt-4 leading-8 pb-2" data-aos="fade-up">
                <p className="text-xl font-semibold font-mateSC text-cyan-700">{image.topic}</p>
                <p className="text-cyan-700">Niche: <span className="text-gray-700">{image.niche}</span></p>
                <p className="text-cyan-700">Date: <span className="text-gray-700">{image.date}</span></p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
