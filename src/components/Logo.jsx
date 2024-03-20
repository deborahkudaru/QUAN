import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo1.png";
const Logo = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <img  className="md:w-10 w-8" src={logo} alt="" />
        </Link>
        <Routes>
          <Route exact path="/" render={() => <div>Home Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Logo;
