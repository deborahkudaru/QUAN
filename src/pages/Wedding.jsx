import React, { useState } from "react";
import weddings from "../constants/wedding";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import { Suspense } from "react";

const Wedding = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < weddings.length - 1 ? prev + 1 : prev));

  return (
    <>
      {/* Show BlackHeader only when modal is closed */}
      {selectedIndex === null && <BlackHeader />}
      <div className="px-4 pt-20 dark:bg-[#121212]">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0 dark:text-white" />
          </button>
          <h2 className="font-playFair text-red-800 dark:text-red-600 font-semibold lg:text-3xl text-lg">
            WEDDINGS
          </h2>
        </div>

        {/* Image Grid */}
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {weddings.map((wedding, index) => (
            <div className="lg:pb-0 md:pb-0 pb-5" key={wedding.id}>
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={wedding.image}
                  alt={wedding.alt}
                  className="shadow-xl cursor-pointer"
                  loading="lazy"
                  onClick={() => openModal(index)}
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: covers the whole page */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-5">
          {/* Close Button */}
          <div className="flex justify-center w-full mb-4">
            <button
              className="text-white text-4xl bg-black bg-opacity-50 rounded-lg p-3 shadow-lg hover:bg-opacity-70 transition"
              onClick={closeModal}
            >
              <BsX />
            </button>
          </div>

          {/* Image Navigation */}
          <div className="flex items-center gap-5">
            {selectedIndex > 0 && (
              <button
                className="text-white text-4xl bg-black bg-opacity-50 rounded-lg p-3 shadow-lg hover:bg-opacity-70 transition"
                onClick={showPrev}
              >
                <BsArrowLeft />
              </button>
            )}

            {/* Image Display */}
            <img
              src={weddings[selectedIndex].image}
              alt={weddings[selectedIndex].alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-xl"
            />

            {selectedIndex < weddings.length - 1 && (
              <button
                className="text-white text-4xl bg-black bg-opacity-50 rounded-lg p-3 shadow-lg hover:bg-opacity-70 transition"
                onClick={showNext}
              >
                <BsArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Wedding;
