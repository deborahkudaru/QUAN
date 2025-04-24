import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

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

  // Form validation state
  const [isFormValid, setIsFormValid] = useState(false);

  // Session types available for selection
  const sessionTypes = [
    "Portrait/Beauty",
    "Fashion Shoot",
    "Wedding/Events",
    "Casual shoot",
    "Collaboration",
    "Music/Shorts"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check if all fields are filled
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== "");
    setIsFormValid(allFieldsFilled);
  }, [formData]);

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

      setResponseMessage("Booking successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    } catch (error) {
      setResponseMessage("Booking Unsuccessful");
    }
  };

  return (
    <div className="dark:bg-[#121212] dark:text-white min-h-screen">
      <BlackHeader />
      <div className="flex items-center lg:px-32 px-10 pt-28 gap-5">
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => navigate(-1)}>
          <BsArrowLeft className="lg:text-2xl text-lg" />
        </motion.button>
        <h2 className="font-playFair font-semibold text-red-800 dark:text-red-600 lg:text-2xl text-lg">
          BOOK A SESSION
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-10 flex gap-10 lg:w-1/2 px-5 m-auto font-lato"
      >
        <form onSubmit={handleSubmit} className="w-full bg-white dark:bg-[#121212] p-6 rounded-xl shadow-lg">
          {Object.keys(formData).map((key, index) => {
            // Render a select dropdown for sessionType, input fields for others
            if (key === "sessionType") {
              return (
                <div className="flex flex-col gap-2 mb-6" key={index}>
                  <label htmlFor={key} className="font-semibold capitalize">
                    Session Type<sup className="text-red-600">*</sup>
                  </label>
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border outline-none bg-transparent border-gray-500 px-5 py-2 rounded-md focus:border-blue-500"
                    required
                  >
                    <option value="" disabled>Select a session type</option>
                    {sessionTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              );
            } else {
              return (
                <div className="flex flex-col gap-2 mb-6" key={index}>
                  <label htmlFor={key} className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}<sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type={key === "email" ? "email" : key === "phoneNumber" ? "tel" : key === "date" ? "date" : key === "time" ? "time" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border outline-none bg-transparent border-gray-500 px-5 py-2 rounded-md focus:border-blue-500"
                    required
                  />
                </div>
              );
            }
          })}
          <div className="flex justify-center">
            <motion.button 
              whileHover={isFormValid ? { scale: 1.05 } : {}}
              className={`px-10 py-2 mt-8 rounded-lg ${
                isFormValid 
                  ? "bg-neutral-900 text-white dark:text-black dark:bg-white hover:bg-gray-800 cursor-pointer" 
                  : "bg-gray-400 text-gray-200 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
              }`}
              type="button"
              onClick={isFormValid ? openModal : undefined}
              disabled={!isFormValid}
            >
              Book
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#212121] shadow-lg w-96 p-6 rounded-lg" onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-2">Confirm booking?</h2>
            <p className="mb-4">After booking, you will be redirected to the home page.</p>
            <div className="flex justify-end space-x-3">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-red-800" onClick={closeModal}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {responseMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#212121] dark:text-white shadow-lg w-96 p-5 rounded-lg"
          >
            <p className={`text-2xl mb-2 flex items-center ${responseMessage === "Booking successful" ? "text-green-500" : "text-red-500"}`}>
              {responseMessage} <FaCircleCheck className="ml-2 text-lg" />
            </p>
            <p>You will receive a call or an email as soon as possible.</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Book;