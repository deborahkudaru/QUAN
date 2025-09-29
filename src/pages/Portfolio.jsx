import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import niche from "../constants/niche";
import BlackHeader from "../components/BlackHeader";
import Typewriter from "../components/Typewriter";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import Loader from "../components/Loader";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
      const fetchImages = async () => {
        try {
          const res = await fetch(
            "https://quan-backend-d2we.onrender.com/images?category=portfolio"
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));

  return (
    <div className="bg-white dark:bg-[#121212] relative">
      <BlackHeader />
      <h3 className="pt-32 pb-6 text-2xl font-bold text-center text-gray-700 lg:text-3xl font-playFair dark:text-white">
        <Typewriter text="SCROLL THROUGH" delay={200} infinite />{" "}
        <IoIosArrowRoundDown className="inline ml-2 text-lg animate-bounce" />
      </h3>

             {/* Loading / Error */}
        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}
        
      <div className="grid gap-10 px-5 lg:px-20 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {images.map((image, index) => (
          <div key={image._id} data-aos="fade-up">
            <div className="cursor-pointer" onClick={() => openModal(index)}>
              <img
                src={image.url}
                alt={image.topic}
                className="shadow-xl rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="pt-4 pb-2 leading-8" data-aos="fade-up">
              <p className="text-lg font-bold text-red-800 font-playFair dark:text-red-600">
                {image.topic}
              </p>
              <p className="font-semibold text-red-800 dark:text-red-600 font-lato">
                Niche:{" "}
                <span className="font-normal text-gray-700 dark:text-white">
                  {image.niche}
                </span>
              </p>
              <p className="font-semibold text-red-800 dark:text-red-600 font-lato">
                Date:{" "}
                <span className="font-normal text-gray-700 dark:text-white">
                  {image.date}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
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
          {/* Image & Navigation */}
          <div className="flex items-center xl:gap-5 lg:gap-2">
            {selectedIndex > 0 && (
              <button
                className="absolute p-1 text-3xl font-semibold text-white transition bg-black bg-opacity-50 rounded-lg shadow-lg lg:text-4xl lg:p-3 hover:bg-opacity-70 lg:relative md:relative"
                onClick={showPrev}
              >
                <BsArrowLeft />
              </button>
            )}
            <img
              src={images[selectedIndex].img}
              alt={images[selectedIndex].topic}
              className="lg:max-h-[80vh] max-h-[80vh] w-auto rounded-lg shadow-xl"
            />
            {selectedIndex < images.length - 1 && (
              <button
                className="absolute p-1 text-3xl font-semibold text-white transition bg-black bg-opacity-50 rounded-lg shadow-lg lg:text-4xl lg:p-3 hover:bg-opacity-70 lg:right-0 lg:relative md:relative md:right-0 right-1"
                onClick={showNext}
              >
                <BsArrowRight />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showScroll && (
        <button
          className="fixed p-3 text-white transition bg-red-800 rounded-full shadow-lg bottom-5 right-5 hover:bg-red-700 animate-bounce"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Gallery;
