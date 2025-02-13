import React from "react";
import "aos/dist/aos.css";
import BlackLogo from "./BlackLogo";
import BlackNavbBar from "./BlackNavbar";
import DarkModeToggle from "./DarkModeToggle";

const BlackHeader = () => {
  
  return (
    <nav>
      <div className="bg-white dark:bg-[#121212] shadow-lg mx-auto flex w-full justify-between flex-wrap  px-5 py-5 fixed z-10">
       <BlackLogo />
       <div className="flex gap-2">
       <BlackNavbBar />
       <DarkModeToggle />
       </div>
     
      </div>
    </nav>
  );
};

export default BlackHeader;
