import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import galleryPictures from "../constants/gallery";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-white">
      <h3 className=" text-center pt-20 pb- font-bold text-2xl lg:text-3xl font-playFair">
        GALLERY
      </h3>

      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-2 gap-5">
        {galleryPictures.map((gal) => (
          <div key={gal.id} className="px-4 pt-10 ">
            <Link to={gal.imgLink}  data-aos="zoom-in">
              <p className="text-xl font-semi-bold mb-2 text-red-800 font-lato">{gal.imgNiche}</p>
              <img
                src={gal.img}
                alt=""
                className="shadow-xl hover:bg-black hover:opacity-80"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
