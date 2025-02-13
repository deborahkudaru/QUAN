import React from "react";
import { Link } from "react-router-dom";
import working from "../images/working.png";
import BlackHeader from "../components/BlackHeader";

const NoPage = () => {
  return (
    <div className="dark:bg-[#121212] min-h-screen flex">
      <BlackHeader />
      <div className="w-1/3 m-auto text-center pt-32 ">
        <div className="flex lg:flex-row flex-col justify-between mb-16">
          <img src={working} alt="coming soon" className="lg:w-3/5 w-full" loading="lazy"/>
          <h3 className="lg:text-2xl text-xl font-semibold relative lg:top-32 top-0 animate-bounce dark:text-white">
            Coming soon
          </h3>
        </div>
        <Link
          to="/"
          className="bg-black text-white text-sm lg:text-base lg:py-4 lg:px-7 py-1 px-3 rounded font-semibold"
        >
          Home page
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
