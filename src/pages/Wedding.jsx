import React from "react";
import weddings from "../constants/wedding";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import BlackHeader from "../components/BlackHeader";
import { Suspense } from "react";

const Wedding = () => {
  const navigate = useNavigate();
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0" />
          </button>
          <h2 className="font-playFair text-red-800 font-semibold lg:text-3xl text-lg">
            WEDDINGS
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
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
            {weddings.map((wedding) => (
              <SwiperSlide key={wedding.id}>
                <div className="mb-10">
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={wedding.image}
                      alt={wedding.alt}
                      className="shadow-xl"
                      loading="lazy"
                    />
                  </Suspense>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Wedding;
