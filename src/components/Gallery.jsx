import React, { useEffect } from "react";
// import photo1 from "../images/photo1.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo10 from "../images/photo10.jpg";
import photo5 from "../images/photo5.jpg";
import photo7 from "../images/photo7.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="bg-white">
      <h3 className=" text-center pt-20 pb-10 font-bold text-2xl lg:text-3xl font-mateSC">
        GALLERY
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 gap-5">
        {/* <img data-aos="fade-up" src={photo1} alt="" /> */}
        <img data-aos="fade-up" src={photo3} alt="" />
        <img data-aos="fade-up" src={photo4} alt="" />
        <img data-aos="fade-up" src={photo10} alt="" />
        <img data-aos="fade-up" src={photo5} alt="" />
        <img data-aos="fade-up" src={photo7} alt="" />
        {/* <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" /> */}
      </div>
    </div>
  );
};

export default Gallery;
