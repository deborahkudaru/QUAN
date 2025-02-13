import React from "react";
import weddings from "../constants/wedding";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import { Suspense } from "react";

const Wedding = () => {
  const navigate = useNavigate();
  return (
    <>
      <BlackHeader />
      <div className="px-4 pt-20 dark:bg-[#121212]">
        <div className="flex py-5 lg:gap-10 gap-5">
          <button onClick={() => navigate(-1)}>
            <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0 dark:text-white" />
          </button>
          <h2 className="font-playFair text-red-800 dark:text-red-600 font-semibold lg:text-3xl text-lg">
            WEDDINGS
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {weddings.map((wedding) => (
            <div className="lg:pb-0 md:pb-0 pb-5" key={wedding.id}>
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={wedding.image}
                  alt={wedding.alt}
                  className="shadow-xl"
                  loading="lazy"
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wedding;
