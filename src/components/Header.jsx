import React from "react";
import "aos/dist/aos.css";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav>
      <div className="bg-transparent mx-auto flex w-full justify-between flex-wrap  px-5 pt-10">
        <Logo />
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
