import React, { useState } from "react";
import image1 from "../images/IMG_5886.png";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import { FaCircleCheck } from "react-icons/fa6";

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    sessionType: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isOpen, setIsOpen] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://k-backend-hk86.vercel.app/api/user/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit booking.");
      }

      const data = await response.json();
      console.log("successful", data, formData);
      setResponseMessage("Booking successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    } catch (error) {
      setResponseMessage("Booking Unsuccessful");
      console.log("failed", error.message);
    }
  };

  return (
    <>
      <BlackHeader />
      <div className="flex lg:px-32 px-10 pt-28 lg:gap-10 gap-5">
        <button onClick={() => navigate(-1)}>
          <BsArrowLeft className="lg:text-2xl text-lg" />
        </button>
        <h2 className="font-playFair font-semibold text-red-800 lg:text-2xl text-lg">
          BOOK A SESSION
        </h2>
      </div>

      <div className="lg:px-32 px-5  pt-10 flex gap-10 flex-col-reverse lg:flex-row font-lato">
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="name">
              Name
              <sup className="text-red-600" required>
                *
              </sup>
            </label>
            <input
              type="text"
              className="border outline-0 border-gray-500 px-5 py-2"
              value={formData.name}
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className=" flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="">
              Email<sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              className="border outline-0 ml-0 border-gray-500 px-5 py-2"
              required
            />
          </div>

          <div className="mb-10 flex lg:flex-row flex-col lg:gap-9 gap-2">
            <label htmlFor="">
              Phone Number<sup className="text-red-600">*</sup>
            </label>
            <input
              type="number"
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              className="border outline-0  border-gray-500 px-5 py-2"
              required
            />
          </div>

          <div className="mb-10 flex lg:flex-row flex-col lg:gap-20 gap-2">
            <label htmlFor="">
              Address<sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border outline-0 ml-0 border-gray-500 px-5 py-2"
              required
            />
          </div>

          <div className="mb-10 flex lg:gap-14 lg:flex-row flex-col gap-2">
            <label htmlFor="">
              Session Type<sup className="text-red-600">*</sup>
            </label>
            <select
              name="sessionType"
              type="text"
              onChange={handleChange}
              value={formData.sessionType}
              className="border outline-0  border-gray-500 px-5 py-2"
              required
            >
              <option value="">Choose a Shoot</option>
              <option value="Birthday Shoot">Birthday Shoot</option>
              <option value="Wedding Shoot">Wedding Shoot</option>
              <option value="Modelling Shoot">Modelling Shoot</option>
              <option value="Casual Shoot">Casual Shoot</option>
              <option value="Fashin Shoot">Fashion Shoot</option>
              <option value="Music Video">Music Video</option>
              <option value="">Other</option>
            </select>
          </div>

          <div className="flex lg:gap-11 flex-col lg:flex-row gap-2">
            <label htmlFor="">
              Date and Time<sup className="text-red-600">*</sup>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={formData.data}
                name="date"
                onChange={handleChange}
                className="border outline-0  border-gray-500 px-5 py-2"
                required
              />
              <input
                type="time"
                value={formData.time}
                name="time"
                onChange={handleChange}
                className="border outline-0  border-gray-500 px-5 py-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-neutral-900 text-white px-10 py-2 lg:mt-12 mt-8 relative lg:left-36 lg:ml-2  hover:bg-gray-800"
              onClick={openModal}
            >
              Book
            </button>
          </div>

          {/* pop up modal */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white shadow-lg w-96 p-6">
                <h2 className="text-xl font-semibold mb-4 font-lato">
                  Confirm booking?
                </h2>
                <div className="flex justify-end space-x-3">
                  <button
                    type="submit"
                    className="bg-gray-500 text-white px-4 py-2 hover:bg-red-800 font-lato"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 font-lato"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
        {responseMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white shadow-lg w-96 p-5">
              <p className="text-green-500 text-2xl mb-2">
                {responseMessage}
                <FaCircleCheck className="inline ml-2 text-lg" />
              </p>
              <p>You will receieve a call or an email as soon as possible.</p>
              {/* <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 font-lato"
              >
                Okay
              </button> */}
            </div>
          </div>
        )}
        <img src={image1} alt="" className="lg:w-1/2 lg:h-1/2 " />
      </div>
    </>
  );
};

export default Book;
