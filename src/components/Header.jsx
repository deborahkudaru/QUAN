import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "../styles/Navbar.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <nav className={navbar ? "navbar active " : "navbar"}>
      <div className="bg-transparent mx-auto flex w-full  items-center justify-between flex-wrap fixed z-20 p-4">
        <Logo />
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
