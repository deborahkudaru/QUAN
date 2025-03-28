import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../images/logo1.png";
import { useTheme } from "./ThemeContext";
import darkLogo from "../images/blacklogo.png";

const BlackLogo = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <Link to="/">
        <img
          className="md:w-10 w-8"
          src={darkMode ? lightLogo : darkLogo}
          loading="lazy"
          alt="black logo"
        />
      </Link>
    </div>
  );
};

export default BlackLogo;
