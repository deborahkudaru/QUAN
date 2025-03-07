import React from "react";
import "aos/dist/aos.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <nav>
      <div className="bg-transparent mx-auto flex w-full justify-between flex-wrap lg:px-20 px-5 py-5">
        <Logo />
        <div className="flex gap-2">
          <div className="self-center">
            <Navbar />
          </div>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
