import React from "react";
import birthdays from "../constants/birthday";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import BlackHeader from "../components/BlackHeader";

const Birthday = () => {
  const navigate = useNavigate();
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg" />
          </button>
          <h2 className="font-playFair font-semibold text-red-800 lg:text-3xl text-lg">BIRTHDAY</h2>
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
            {birthdays.map((birthday) => (
              <SwiperSlide key={birthday.id}>
                <div className="mb-10">
                  <img
                    src={birthday.image}
                    alt={birthday.alt}
                    className="shadow-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Birthday;
