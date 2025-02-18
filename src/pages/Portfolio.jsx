import React, { useEffect, useState, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import niche from "../constants/niche";
import BlackHeader from "../components/BlackHeader";
import Typewriter from "../components/Typewriter";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev < niche.length - 1 ? prev + 1 : prev
    );

  return (
    <div className="bg-white dark:bg-[#121212]">
      <BlackHeader />
      <h3 className="text-center pt-32 pb-6 font-bold text-2xl lg:text-3xl font-playFair text-gray-700 dark:text-white">
        <Typewriter text="SCROLL THROUGH" delay={200} infinite />{" "}
        <IoIosArrowRoundDown className="inline ml-2 animate-bounce text-lg" />
      </h3>
      <div className="px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {niche.map((image, index) => (
          <div key={image.id} data-aos="fade-up">
            <div
              className="cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={image.img}
                  alt={image.topic}
                  className="shadow-xl rounded-xl"
                  loading="lazy"
                />
              </Suspense>
            </div>
            <div className="pt-4 leading-8 pb-2" data-aos="fade-up">
              <p className="text-lg font-bold font-playFair text-red-800 dark:text-red-600">
                {image.topic}
              </p>
              <p className="text-red-800 dark:text-red-600 font-semibold font-lato">
                Niche:{" "}
                <span className="text-gray-700 dark:text-white font-normal">
                  {image.niche}
                </span>
              </p>
              <p className="text-red-800 dark:text-red-600 font-semibold font-lato">
                Date:{" "}
                <span className="text-gray-700 dark:text-white font-normal">
                  {image.date}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm xl:p-5 lg:p-3 p-1 z-50">
          {/* Close Button */}
          <div className="flex justify-center w-full mb-4">
            <button
              className="text-white lg:text-4xl text-3xl font-semibold bg-black bg-opacity-50 rounded-lg lg:p-3 p-1 shadow-lg hover:bg-opacity-70 transition"
              onClick={closeModal}
            >
              <BsX />
            </button>
          </div>
          {/* Image & Navigation */}
          <div className="flex items-center xl:gap-5 lg:gap-2">
            {selectedIndex > 0 && (
              <button
                className="text-white lg:text-4xl text-3xl font-semibold bg-black bg-opacity-50 rounded-lg lg:p-3 p-1 shadow-lg hover:bg-opacity-70 lg:relative md:relative transition absolute"
                onClick={showPrev}
              >
                <BsArrowLeft />
              </button>
            )}
            <img
              src={niche[selectedIndex].img}
              alt={niche[selectedIndex].topic}
              className="lg:max-h-[80vh] max-h-[80vh] w-auto rounded-lg shadow-xl"
            />
            {selectedIndex < niche.length - 1 && (
              <button
                className="text-white lg:text-4xl text-3xl font-semibold bg-black bg-opacity-50 rounded-lg lg:p-3 p-1 shadow-lg hover:bg-opacity-70 transition lg:right-0 lg:relative md:relative absolute md:right-0  lg;right-0  right-1" 
                onClick={showNext}
              >
                <BsArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
