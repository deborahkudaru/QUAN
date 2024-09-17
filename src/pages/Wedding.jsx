import React from "react";
import weddings from "../constants/wedding";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Wedding = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 pt-7">
      <div className="flex pt-10 pb-5 lg:gap-10 gap-5">
        <button onClick={() => navigate(-1)}>
          <BsArrowLeft className="lg:text-3xl text-2xl relative top-1 lg:top-0" />
        </button>
        <h2 className="font-mateSC lg:text-3xl text-lg">WEDDINGS</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {weddings.map((wedding) => (
          <div key={wedding.id}>
            <img src={wedding.image} alt={wedding.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;