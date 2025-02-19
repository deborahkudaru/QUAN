import React from "react";
import {  Link } from "react-router-dom";
import lightLogo from "../images/logo1.png";

const Logo = () => {
  return (
    <div>
        <Link to="/">
          <img  className="md:w-10 w-8" 
          src={lightLogo}
           alt="" loading="lazy"/>
        </Link>
        
    </div>
  );
};

export default Logo;
