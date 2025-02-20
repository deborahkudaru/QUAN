import React, { useState } from "react";
import fashion from "../constants/fashion";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import { Suspense } from "react";

const Fashion = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < fashion.length - 1 ? prev + 1 : prev));

  return (
    <>
      {selectedIndex === null && <BlackHeader />}
      <div className="px-5 lg:px-20 pt-20 dark:bg-[#121212]">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-2xl text-lg dark:text-white" />
          </button>
          <h2 className="font-playFair text-red-800 dark:text-red-600 font-semibold lg:text-3xl text-lg">
            FASHION
          </h2>
        </div>

        {/* Image Grid */}
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {fashion.map((fash, index) => (
            <div className="lg:pb-0 md:pb-0 pb-5" key={fash.id}>
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={fash.image}
                  alt={fash.alt}
                  className="shadow-xl cursor-pointer"
                  loading="lazy"
                  onClick={() => openModal(index)}
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>

      {/* Modal covering the whole page */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm xl:p-5 lg:p-3 p-1">
          {/* Close Button */}
          <div className="flex justify-center w-full mb-4">
            <button
              className="text-white lg:text-4xl text-3xl font-semibold bg-black bg-opacity-50 rounded-lg lg:p-3 p-1 shadow-lg hover:bg-opacity-70 transition"
              onClick={closeModal}
            >
              <BsX />
            </button>
          </div>

          {/* Image Navigation */}
          <div className="flex items-center xl:gap-5 lg:gap-2">
            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                className="text-white lg:text-4xl text-3xl font-semibold bg-black bg-opacity-50 rounded-lg lg:p-3 p-1 shadow-lg hover:bg-opacity-70 lg:relative md:relative transition absolute"
                onClick={showPrev}
              >
                <BsArrowLeft />
              </button>
            )}

            {/* Image Display */}
            <img
              src={fashion[selectedIndex].image}
              alt={fashion[selectedIndex].alt}
              className="lg:max-h-[80vh] max-h-[80vh] w-auto rounded-lg shadow-xl"
            />

            {/* Next Button */}
            {selectedIndex < fashion.length - 1 && (
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
    </>
  );
};

export default Fashion;
