import React, {useState} from "react";
import image1 from "../images/IMG_5886.png";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";

const Book = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    sessionType: "",
    date: "",
    time: ""
  })

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };
 

  return (
    <>
    <BlackHeader />
      <div className="flex lg:px-32 px-16 pt-28 lg:gap-10 gap-5">
        <button onClick={() => navigate(-1)}>
          <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0" />
        </button>
        <h2 className="font-mateSC lg:text-2xl text-lg">BOOK A SESSION</h2>
      </div>

      <div className="lg:px-32 px-16  pt-10 flex gap-10 flex-col-reverse lg:flex-row font-mateSC">
        <form action="">
          <div className="flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="name">
              Name<sup className="text-red-600" required>*</sup>
            </label>
            <input
              type="text"
              className="border outline-0 border-gray-500 px-5 py-2"
              value={bookingData.name}
              name ="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className=" flex lg:flex-row flex-col lg:gap-24 gap-2 mb-10">
            <label htmlFor="">
              Email<sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={bookingData.email}
              name ="email"
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
              onChange = {handleChange}
              name="phoneNumber"
              value={bookingData.phoneNumber}
              className="border outline-0  border-gray-500 px-5 py-2"
              required
            />
          </div>

          <div className="mb-10 flex lg:flex-row flex-col lg:gap-20 gap-2">
            <label htmlFor="">
              Address<sup className="text-red-600">*</sup>
            </label>
            <input
              type="address"
              name="address"
              value={bookingData.address}
              onchange = {handleChange}
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
              id=""
              onChange={handleChange}
              value = {bookingData.sessionType}
              className="border outline-0  border-gray-500 px-5 py-2"
              required
            >
              <option value="">Choose a Shoot</option>
              <option value="">Birthday Shoot</option>
              <option value="">Wedding Shoot</option>
              <option value="">Modelling Shoot</option>
              <option value="">Casual Shoot</option>
              <option value="">Fashion Shoot</option>
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
                value = {bookingData.data}
                name = "date"
                onChange = {handleChange}
                className="border outline-0  border-gray-500 px-5 py-2"
                required
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
