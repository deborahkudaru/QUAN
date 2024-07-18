import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <div className="w-2/3  m-auto">
        <h3 className="text-center pt-10 pb-3 font-bold text-2xl lg:text-3xl font-mateSC">
          ABOUT
        </h3>
        <p className="text-justify justify-center text-zinc-900 font-medium font-CrimsonText pb-5 lg:text-2xl md:text-xl text-base">
          Welcome to <i className="font-bold">Quan Imagery</i>, where moments
          become timeless treasures. In a world filled with fleeting moments, we
          believe in the enduring power of photography and videography to
          capture the essence of life's most precious occasions. Founded with a
          passion for storytelling through imagery, Quan Imagery is the
          culmination of a lifelong love affair with the art of photography and
          videography. Led by <span className="font-bold">Kwoopnan Anpe, </span>{" "}
          our team is driven by a shared commitment to craftsmanship,
          creativity, and connection. With each click of the shutter, we strive
          to encapsulate the beauty, emotion, and authenticity of the human
          experience.
        </p>

        <Link
          to="/book"
          className="text-black  font-mateSC font-semibold lg:text-xl text-sm relative text-end"
        >
          BOOK A SESSION{" "}
          <GoArrowRight className="relative left-32 lg:left-44 lg:bottom-6 bottom-5 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default About;
