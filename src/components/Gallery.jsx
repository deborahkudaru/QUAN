import React from "react";
import photo7 from "../images/photo7.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo10 from "../images/photo10.jpg";
import photo9 from "../images/photo9.jpg";

const Gallery = () => {
  return (
    <div>
      <h3 className=" text-center pt-16 pb-3 font-bold text-2xl font-mateSC">
        GALLERY
      </h3>
      <div className="flex flex-col gap-5 px-4">
        <img src={photo7} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo10} alt="" />
        <img src={photo9} alt="" />
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
