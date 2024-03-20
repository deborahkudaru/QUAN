import React from "react";
import photo1 from "../images/photo1.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";

const Gallery = () => {
  return (
    <div>
      <h3 className="text-center pt-10 pb-3 font-bold text-2xl font-mateSC">
        GALLERY
      </h3>
      <div className="flex flex-col gap-2">
        <img src={photo1} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
        <img src={photo6} alt="" />
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
