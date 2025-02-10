import React from "react";
import "aos/dist/aos.css";
import BlackLogo from "./BlackLogo";
import BlackNavbBar from "./BlackNavbar";

const BlackHeader = () => {
  return (
    <nav>
      <div className="bg-white shadow-lg mx-auto flex w-full justify-between flex-wrap  px-5 py-5 fixed z-10">
       <BlackLogo />
        <BlackNavbBar />
      </div>
    </nav>
  );
};

export default BlackHeader;
