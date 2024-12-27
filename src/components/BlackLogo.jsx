import React from "react";
import {  Link } from "react-router-dom";
import logo from "../images/blacklogo.png";

const BlackLogo = () => {
  return (
    <div>
      
        <Link to="/">
          <img  className="md:w-10 w-8" src={logo} alt="" />
        </Link>
        
    </div>
  );
};

export default BlackLogo;
