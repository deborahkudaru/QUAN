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
      <h3 className=" text-center pt-32 pb-10 font-bold text-2xl lg:text-3xl font-mateSC">
        PORTFOLIO
      </h3>
      <div className="px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {niche.map((image) => (
          <div className="" key={image.id}  data-aos="fade-up">
            <Link>
              <div className="">
                <img src={image.img} alt="" className="shadow-xl" />
              </div>
              <div className="pt-4 leading-8 pb-2">
                <p>{image.topic}</p>
                <p>{image.date}</p>
              </div>
            </Link>
            {/* <p className="text-lg text-blue-800">{image.niche}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
