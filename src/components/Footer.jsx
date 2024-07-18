import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-40 m-auto mt-10 lg:mt-28">
      <div className="flex gap-6 text-neutral-800 text-2xl lg:text-3xl">
        <a className="hover:text-blue-400" href="">
          <FaInstagram />
        </a>
        <a className="hover:text-blue-400" href="">
          <FaWhatsapp />
        </a>
        <a className="hover:text-blue-400" href="">
          <FaTwitter />
        </a>
        <a className="hover:text-blue-400" href="mailto:">
          <FaEnvelope />
        </a>
      </div>
      <footer className="text-center mt-10 mb-10 text-xs text-neutral-500">
        © 2024
      </footer>
    </div>
  );
};

export default Footer;
