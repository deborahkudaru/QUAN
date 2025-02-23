import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="bg-white dark:bg-[#121212]">
      <div className="px-10 lg:px-20  m-auto">
        <h3
          className="text-center pt-10 pb-3 font-bold text-2xl lg:text-3xl font-playFair text-gray-900 dark:text-white"
          data-aos="zoom-in"
        >
          WELCOME
        </h3>
        <p
          className="text-justify justify-center text-zinc-900 font-medium font-CrimsonText pb-5 lg:text-2xl md:text-xl text-base font-lato dark:text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          How you present yourself visually defines how others perceive you.
          Whether you’re an individual looking to establish a personal brand or
          a business aiming to connect with the right audience, your image is
          your first impression—and we make sure it speaks volumes. <br />{" "}
          <br /> At{" "}
          <span className="text-red-800 font-semibold">Quan imagery</span> we go
          beyond photography—we create stories, art, and timeless moments with
          an Africans touch. Whether you're an individual, artist, entrepreneur,
          model, or brand, our expertise in fashion, beauty, corporate,
          commercial photography ensures your uniqueness shines. Our photography
          is tailored to showcase your uniqueness while maintaining a high-end,
          polished aesthetic. Let’s create images that captivate, inspire, and
          leave a lasting impact.
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
