import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
      <a href=""><FaInstagram /></a>
      <a href=""><FaWhatsapp /></a>
      <a href=""><FaTwitter /></a>
      <a href=""><FaEnvelope /></a>
      </div>
     <footer>© 2024</footer>
    </div>
  )
}

export default Footer