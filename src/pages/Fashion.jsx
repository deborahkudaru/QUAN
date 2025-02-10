import React from "react";
import fashion from "../constants/fashion";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import BlackHeader from "../components/BlackHeader";

const Fashion = () => {
  const navigate = useNavigate();
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg" />
          </button>
          <h2 className="font-playFair text-red-800 font-semibold lg:text-3xl text-lg">FASHION</h2>
        </div>

        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
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
            {fashion.map((fash) => (
              <SwiperSlide key={fash.id}>
                <div className="mb-10 flex ">
                  <img src={fash.image} alt={fash.alt} className="shadow-xl" loading="lazy"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Fashion;
