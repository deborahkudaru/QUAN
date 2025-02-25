import React, { useEffect } from "react";
import music from "../constants/music";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import Aos from "aos";
import "aos/dist/aos.css";

const Music = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <BlackHeader />
      <div className="lg:px-20 px-5 pt-20 dark:bg-[#121212] min-h-screen">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg dark:text-white" />
          </button>
          <h2 className="font-playFair font-semibold text-red-800 dark:text-red-600 lg:text-3xl text-lg">
            MUSIC VIDEOS/SHORTS
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {music.map((m) => (
            <div key={m.id}>
              <img src={m.image} alt={m.alt} />
              <div className="pt-4 leading-8 pb-2" data-aos="fade-up">
                <p className="text-lg font-bold font-playFair text-red-800 dark:text-red-600">
                  {m.title}
                </p>
                <p className="text-red-800 dark:text-red-600 font-semibold font-lato">
                  Artist:{" "}
                  <span className="text-gray-700 dark:text-white font-normal">
                    {m.artist}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
