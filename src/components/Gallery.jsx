import React, { useEffect } from "react";
import photo1 from "../images/photo1.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo10 from "../images/photo10.jpg";
import photo5 from "../images/photo5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <h3 className=" text-center pt-16 pb-3 font-bold text-2xl font-mateSC">
        GALLERY
      </h3>
      <div className="flex flex-col gap-5 px-4">
        <img data-aos="fade-up" src={photo1} alt="" />
        <img data-aos="fade-up" src={photo3} alt="" />
        <img data-aos="fade-up" src={photo4} alt="" />
        <img data-aos="fade-up" src={photo10} alt="" />
        <img data-aos="fade-up" src={photo5} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
