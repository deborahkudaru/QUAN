import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

const About = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);
  return (
    <div className="bg-white">
      <div className="w-2/3  m-auto">
        <h3 className="text-center pt-10 pb-3 font-bold text-2xl lg:text-3xl font-playFair text-gray-900">
          WELCOME
        </h3>
        <p className="text-justify justify-center text-zinc-900 font-medium font-CrimsonText pb-5 lg:text-2xl md:text-xl text-base font-lato">
          Welcome to <i className="font-bold text-red-800">Quan Imagery</i>, where moments
          become timeless treasures. In a world filled with fleeting moments, we
          believe in the enduring power of photography and videography to
          capture the essence of life's most precious occasions. Founded with a
          passion for storytelling through imagery, Quan Imagery is the
          culmination of a lifelong love affair with the art of photography and
          videography. Led by <i className="font-bold text-red-800">Kwoopnan Anpe, </i>{" "}
          our team is driven by a shared commitment to craftsmanship,
          creativity, and connection. With each click of the shutter, we strive
          to encapsulate the beauty, emotion, and authenticity of the human
          experience.
        </p>

        <div className="flex gap-2 justify-end">
          <Link
            to="/book"
            className="text-gray-900  font-lato font-semibold lg:text-xl text-sm relative text-end hover:underline hover:text-red-800"
          >
            BOOK A SESSION{" "}
          </Link>
          <GoArrowRight className="text-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default About;
