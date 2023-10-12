import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="left-corner">
        <BsTruck />
        <p>
          Free Delivery <span className="divider">|</span> Return Policy
        </p>
      </div>
      <div className="right-corner">
        <p style={{ paddingRight: "15px" }}>Login</p>
        <p>Follow</p>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
