import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white dark:bg-[#121212]">
      <div className="w-2/3  m-auto">
        <h3 className="text-center pt-10 pb-3 font-bold text-2xl lg:text-3xl font-playFair text-gray-900 dark:text-white">
          WELCOME
        </h3>
        <p className="text-justify justify-center text-zinc-900 font-medium font-CrimsonText pb-5 lg:text-2xl md:text-xl text-base font-lato dark:text-white">
          Welcome to <i className="font-bold text-red-800">Quan Imagery</i>,
          where moments become timeless treasures. In a world filled with
          fleeting moments, we believe in the enduring power of photography and
          videography to capture the essence of life's most precious occasions.
          Founded with a passion for storytelling through imagery, Quan Imagery
          is the culmination of a lifelong love affair with the art of
          photography and videography. Led by{" "}
          <i className="font-bold text-red-800">Kwoopnan Anpe, </i> our team is
          driven by a shared commitment to craftsmanship, creativity, and
          connection. With each click of the shutter, we strive to encapsulate
          the beauty, emotion, and authenticity of the human experience.
        </p>

        <div className="flex gap-2 justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/book"
              className="text-gray-900 dark:text-white font-lato font-semibold lg:text-xl text-sm relative text-end hover:underline hover:text-red-800"
            >
              BOOK A SESSION
            </Link>
          </motion.div>

          <motion.div
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GoArrowRight className="text-2xl dark:text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
