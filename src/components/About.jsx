import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import image from "../images/IMG_8858.JPG";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen flex flex-col items-center px-5 lg:px-20 py-10 font-playFair">
      <motion.h3
        className="text-center font-bold text-2xl lg:text-4xl font-playFair text-gray-900 dark:text-white"
        data-aos="zoom-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WELCOME
      </motion.h3>

      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={image}
          alt="About Us"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          className="text-justify text-zinc-900 font-medium font-CrimsonText lg:text-xl text-base dark:text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          How you present yourself visually defines how others perceive you.
          Whether you’re an individual looking to establish a personal brand or
          a business aiming to connect with the right audience, your image is
          your first impression—and we make sure it speaks volumes. <br />{" "}
          <br />
          At <span className="text-red-800 font-semibold">Quan Imagery</span>,
          we go beyond photography—we create stories, art, and timeless moments
          with an African touch. Whether you're an individual, artist,
          entrepreneur, model, or brand, our expertise in fashion, beauty,
          corporate, and commercial photography ensures your uniqueness shines.
          Our photography is tailored to showcase your uniqueness while
          maintaining a high-end, polished aesthetic. Let’s create images that
          captivate, inspire, and leave a lasting impact.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex gap-2 justify-end items-center mt-6 w-full lg:w-auto self-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
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
      </motion.div>
    </div>
  );
};

export default About;
