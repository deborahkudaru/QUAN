import React from "react";
import image1 from "../images/IMG_5886.png";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div className="flex lg:px-32 px-16 pt-10 lg:gap-10 gap-5">
        <Link to="/">
          <BsArrowLeft className="lg:text-3xl text-lg relative top-1 lg:top-0" />
        </Link>

        <h2 className="font-mateSC lg:text-3xl text-lg">BOOK A SESSION</h2>
      </div>

      <div className="lg:px-32 px-16  pt-10 flex gap-10 flex-col-reverse lg:flex-row font-mateSC">
        <form action="">
          <div className="flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="name">
              Name<sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              className="border outline-0 border-gray-500 px-5 py-2"
            />
          </div>

          <div className=" flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="">
              Email<sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              className="border outline-0 lg:ml-2 ml-0 border-gray-500 px-5 py-2"
            />
          </div>

          <div className="mb-10 flex lg:flex-row flex-col lg:gap-9 gap-2">
            <label htmlFor="">
              Phone Number<sup className="text-red-600">*</sup>
            </label>
            <input
              type="number"
              className="border outline-0  border-gray-500 px-5 py-2"
            />
          </div>

          <div className="mb-10 flex lg:flex-row flex-col lg:gap-20 gap-2">
            <label htmlFor="">
              Address<sup className="text-red-600">*</sup>
            </label>
            <input
              type="address"
              className="border outline-0 lg:ml-2 ml-0 border-gray-500 px-5 py-2"
            />
          </div>

          <div className="mb-10 flex lg:gap-14 lg:flex-row flex-col gap-2">
            <label htmlFor="">
              Session Type<sup className="text-red-600">*</sup>
            </label>
            <select
              name=""
              id=""
              className="border outline-0  border-gray-500 px-5 py-2"
            >
              <option value=""></option>
              <option value="">Birthday</option>
              <option value="">Wedding</option>
              <option value="">Model</option>
              <option value="">Casual</option>
              <option value="">Fashion</option>
              <option value="" className="hover:bg-black">
                Music Video
              </option>
              <option value="">Other</option>
            </select>
          </div>

          <div className="flex lg:gap-11 flex-col lg:flex-row gap-2">
            <label htmlFor="">
              Date and Time<sup className="text-red-600">*</sup>
            </label>
            <div className="flex gap-8">
              <input
                type="date"
                className="border outline-0  border-gray-500 px-5 py-2"
              />
              <input
                type="time"
                className="border outline-0  border-gray-500 px-5 py-2"
              />
            </div>
          </div>

          <button className="bg-neutral-900 text-white px-10 py-2 lg:mt-12 mt-5 relative lg:left-36 lg:ml-2  hover:bg-gray-800">
            Book
          </button>
        </form>
        <img src={image1} alt="" className="lg:w-1/2 lg:h-1/2 " />
      </div>
    </>
  );
};

export default Book;
