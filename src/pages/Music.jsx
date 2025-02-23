import React, { useState } from "react";
import music from "../constants/music";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";

const Music = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BlackHeader />
      <div className="lg:px-20 px-5 pt-20 dark:bg-[#121212]">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg dark:text-white" />
          </button>
          <h2 className="font-playFair font-semibold text-red-800 dark:text-red-600 lg:text-3xl text-lg">
            MUSIC VIDEOS/SHORTS
          </h2>
        </div>
        {music.map((m) => (
          <div
            key={m.id}
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3"
          >
            <img src={m.image} alt={m.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
