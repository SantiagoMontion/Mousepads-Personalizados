import Logo from "./Logo.svg";
import burger from "./burger.svg"
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <a href="https://www.mgmgamers.store" target="_blank">
          <img className="mgm-logo" src={Logo}></img>
        </a>
      </div>
      <div className="navbar-middle">
        <a href="/about" className="navbar-navlink">
          Blog
        </a>
        
        <a href="/about" className="navbar-navlink">
          Tienda Oficial
        </a>
        <a href="/contact" className="navbar-navlink">
          Contacto
        </a>
      </div>

      <div className="navbar-rigth">
      <a href="/contact" className="navbar-navlink">
          Contacto
        </a>
        <button className="burger-menu-button" onClick={handleMenuToggle}>
          <img src={burger}></img>
        </button>
        {isOpen && (
          <nav className="burger-menu">
            <div className="burger-container">
              <a href="/" className="navbar-navlink">
                TIENDA
              </a>
              <a href="/about" className="navbar-navlink">
                BLOG
              </a>
              <a href="/contact" className="navbar-navlink">
                PREGUNTAS FRECUENTES
              </a>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
