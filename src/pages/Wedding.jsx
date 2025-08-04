import React, { useState, useEffect } from "react";
// import weddings from "../constants/wedding";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
// import { Suspense } from "react";

const Wedding = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/images?category=weddings-events"
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        setError("Something went wrong while loading images.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {selectedIndex === null && <BlackHeader />}
      <div className="px-5 lg:px-20 pt-20 dark:bg-[#121212] min-h-screen">
        <div className="flex gap-5 py-5 lg:gap-10">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="relative text-2xl lg:text-3xl top-1 lg:top-0 dark:text-white" />
          </button>
          <h2 className="text-lg font-semibold text-red-800 font-playFair dark:text-red-600 lg:text-3xl">
            WEDDINGS
          </h2>
        </div>

        {/* Loading / Error */}
        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Image Grid */}
        <div className="grid-cols-1 lg:grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          {images.map((wedding, index) => (
            <div className="pb-5 lg:pb-0 md:pb-0" key={wedding._id}>
              <img
                src={wedding.url}
                alt={wedding.alt}
                className="shadow-xl cursor-pointer"
                loading="lazy"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal covering the whole page */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-1 bg-black bg-opacity-80 backdrop-blur-sm xl:p-5 lg:p-3">
          {/* Close Button */}
          <div className="flex justify-center w-full mb-4">
            <button
              className="p-1 text-3xl font-semibold text-white transition bg-black bg-opacity-50 rounded-lg shadow-lg lg:text-4xl lg:p-3 hover:bg-opacity-70"
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
                className="absolute p-1 text-3xl font-semibold text-white transition bg-black bg-opacity-50 rounded-lg shadow-lg lg:text-4xl lg:p-3 hover:bg-opacity-70 lg:relative md:relative"
                onClick={showPrev}
              >
                <BsArrowLeft />
              </button>
            )}

            {/* Image Display */}
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="lg:max-h-[80vh] max-h-[80vh] w-auto rounded-lg shadow-xl"
            />

            {/* Next Button */}
            {selectedIndex < images.length - 1 && (
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

export default Wedding;
