import React from "react";
import "aos/dist/aos.css";
import BlackLogo from "./BlackLogo";
import BlackNavbBar from "./BlackNavbar";
import DarkModeToggle from "./DarkModeToggle";

const BlackHeader = () => {
  return (
    <nav className="fixed w-full z-10 bg-white dark:bg-[#121212] shadow-lg">
      <div className="mx-auto flex w-full justify-between items-center flex-wrap lg:px-20 px-5 py-3">
        <BlackLogo />
        <div className="flex gap-2 items-center">
          <BlackNavbBar />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default BlackHeader;
