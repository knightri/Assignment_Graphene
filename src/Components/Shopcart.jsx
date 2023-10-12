import { useState } from "react";
import person from "./person.png";
import star2 from "./Star2.png";
import lines from "./lines.png";
import cross from "./cross.png";
import icon from "./icon.png";
import line2 from "./line2.png";
import star3 from "./Star3.png";

export default function Shopcart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shopcart">
      <div className="shopcart_header">
        <div>ShopKart</div>
        <div className="bag">WISHLIST (0) BAG (0)</div>
        <img
          src={isMenuOpen ? cross : lines}
          className="menu-icon"
          alt=""
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="mobile-navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Our Products</a>
          <a href="#contact">Contact Us</a>
        </div>
      )}
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <div class="dropdown">
          <p class="dropbtn">Our Products</p>
          <div class="dropdown-content">
            <a href="#p1">Product 1</a>
            <a href="#p2">Product 2</a>
            <a href="#p3">Product 3</a>
            <a href="#p4">Product 4</a>
          </div>
        </div>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="fresh-container">
        <div className="fresh">
          <span>Fresh</span>
          <span className="two">2022</span>
          <span>Look</span>
        </div>
      </div>
      <img src={star2} className="star2" alt="" />
      <img src={person} className="person" alt="" />
      <div className="see_more">
        <p style={{ color: "white", fontSize: "18px" }}>See more</p>
        <img src={icon} style={{ width: "15px", height: "15px" }} alt="" />
      </div>
      <div className="underline2">
        <img style={{ maxWidth: "70%", color: "white" }} src={line2} alt="" />
        <img style={{ color: "white" }} src={star3} alt="" />
      </div>
      <div className="orange"></div>
      <div className="jacket">
        <span>OREGON JACKET</span>
        <br />
        <span>$124</span>
      </div>
    </div>
  );
}
