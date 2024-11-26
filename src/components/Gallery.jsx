import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import galleryPictures from "../constants/gallery";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { GoArrowRight } from "react-icons/go";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-white">
      <h3 className=" text-center pt-20 pb-10 font-bold text-2xl lg:text-3xl font-mateSC">
        GALLERY
      </h3>

      <div>
        {galleryPictures.map((gal) => (
          <div key={gal.id} className="px-4 pt-10">
            <Link to={gal.imgLink}>
              <img src={gal.img} alt="" className="shadow-xl hover:bg-black hover:opacity-80" />
              <p className="text-xl font-semi-bold mt-4">{gal.imgNiche}</p>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end mt-5 px-5 gap-2">
        <Link
          to="/album"
          className="text-black  font-mateSC font-semibold lg:text-xl text-sm relative hover:underline"
        >
          VIEW MORE
        </Link>
        <GoArrowRight className="text-2xl animate-pulse"/>
      </div> */}
    </div>
  );
};

export default Gallery;
