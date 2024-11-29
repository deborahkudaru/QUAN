import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import niche from "../constants/niche";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-white">
      <h3 className=" text-center py-7 font-bold text-xl lg:text-3xl font-mateSC">
      QUAN IMAGERY PORTFOLIO
      </h3>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 gap-5">
        <div className="flex">
          <Swiper
            breakpoints={{
              600: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            {niche.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="pb-4">
                  <p className="text-lg mb-5">{image.niche}</p>
                  <Link>
                    <div className="pr-14">
                      <img src={image.img} alt="" className="shadow-xl" />
                    </div>
                    <div className="pt-4 leading-8 mb-5">
                      <p>{image.topic}</p>
                      <p>{image.date}</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
