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
          At Quan Imagery, we believe that powerful imagery is the cornerstone
          of personal and business branding. In today’s world, how you present
          yourself visually defines how others perceive you. Whether you’re an
          individual looking to establish a personal brand or a business aiming
          to connect with the right audience, your image is your first
          impression—and we make sure it speaks volumes. That's why at Quan
          imagery we go beyond photography—we create stories, art, and timeless
          moments with an Africans touch. Our work is a fusion of tradition and
          modern expression, designed to elevate personal and business brands
          through compelling visuals. We specialize in crafting authentic
          visually striking photographs that brings out the essence of
          individuals, creatives, and businesses, transforming every shoot into
          a work of art. Whether you're an artist, entrepreneur, model, or
          brand, our photography is tailored to showcase your uniqueness while
          maintaining a high-end, polished aesthetic. Your brand deserves to be
          seen, felt, and remembered. Let’s create images that make that happen.
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
