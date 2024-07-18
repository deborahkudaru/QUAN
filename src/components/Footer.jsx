import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-40 m-auto mt-10">
      <div className="flex gap-6 text-neutral-700 text-2xl">
        <a className="hover:text-yellow-600" href="">
          <FaInstagram />
        </a>
        <a className="hover:text-yellow-600" href="">
          <FaWhatsapp />
        </a>
        <a className="hover:text-yellow-600" href="">
          <FaTwitter />
        </a>
        <a className="hover:text-yellow-600" href="mailto:">
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
