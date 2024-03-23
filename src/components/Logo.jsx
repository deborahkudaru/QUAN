import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo1.png";
import Body from "./Body";
const Logo = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <img  className="md:w-10 w-8" src={logo} alt="" />
        </Link>
        <Routes>
          <Route exact path="/" render={() => <div><Body /></div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Logo;
