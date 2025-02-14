import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-6 text-neutral-800 dark:text-white text-2xl lg:text-3xl dark:bg-[#121212] pt-10 lg:pt-28">
        <a
          className=" hover:text-red-800"
          href="https://www.instagram.com/quanimagery?igsh=MXVkNmJscjVmNjAyMQ%3D%3D&utm_source=qr"
        >
          <FaInstagram />
        </a>
        <a className=" hover:text-red-800" href="http://wa.me/2348146506320">
          <FaWhatsapp />
        </a>
        <a
          className=" hover:text-red-800"
          href="https://x.com/directorquan?s=11&t=VMwDqoM43re5-MwjAGxCOg"
        >
          <FaTwitter />
        </a>
        <a className=" hover:text-red-800" href="mailto:quanimagery@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <footer className="text-center py-10 text-xs dark:bg-[#121212] text-neutral-500">
        © 2024 Quan Imagery.co
      </footer>
    </div>
  );
};

export default Footer;
