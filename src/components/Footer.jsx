import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-40 m-auto pt-10 lg:mt-28">
      <div className="flex gap-6 text-neutral-800 text-2xl lg:text-3xl">
        <a
          className=" hover:text-gray-800"
          href="https://www.instagram.com/quanimagery?igsh=MXVkNmJscjVmNjAyMQ%3D%3D&utm_source=qr"
        >
          <FaInstagram />
        </a>
        <a className=" hover:text-gray-800" href="http://wa.me/2348146506320">
          <FaWhatsapp />
        </a>
        <a
          className=" hover:text-gray-800"
          href="https://x.com/directorquan?s=11&t=VMwDqoM43re5-MwjAGxCOg"
        >
          <FaTwitter />
        </a>
        <a className=" hover:text-gray-800" href="mailto:quanimagery@gmail.com">
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
