import React from "react";
import birthdays from "../constants/birthday";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Birthday = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 pt-7">
      <div className="flex pt-10 pb-5 lg:gap-10 gap-5">
        <button onClick={() => navigate(-1)}>
          <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0" />
        </button>
        <h2 className="font-mateSC lg:text-3xl text-lg">BIRTHDAY</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {birthdays.map((birthday) => (
          <div key={birthday.id}>
            <img src={birthday.image} alt={birthday.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birthday;