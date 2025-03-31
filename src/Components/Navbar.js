<<<<<<< HEAD
import React, { useState } from 'react';
import '../css/Navbar.css';
import Logo from '../img/Logo.svg';

const Navbar = () => {
  // Estado para controlar la apertura/cierre del menú mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href='/'><img src={Logo} alt="Logo" /></a>
        </div>
        
        {/* Burger button visible en mobile */}
        <div className="burger" onClick={toggleMenu}>
          <div className={`line line1 ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line line2 ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line line3 ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        
        {/* Links de navegación; se muestran en escritorio y se ocultan/expanden en mobile */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          
          <li><a href="https://mgmgamers.store/" target='new_blank'>Tienda</a></li>
          <li><a href="/informacion">Más información</a></li>
        </ul>
      </div>
    </nav>
  );
};
=======
import Logo from "../img/Logo.svg";
import burger from "../img/burger.svg";
import instagram_logo from "../img/instagram_logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import burger_close from "../img/burger_close.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="pre-header">
        📦 Los pads tienen una demora de 5 a 10 días hábiles en ser despachados
        📦
      </div>
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/">
            <img className="mgm-logo" src={Logo}></img>
          </a>
        </div>
        <div className="navbar-middle">
          <Link
            activeClass="active"
            to="img-container"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <a target="_blank" className="navbar-navlink">
              Personalizar
            </a>
          </Link>

          <a
            href="https://tu-mousepad.mgmgamers.store/"
            target="_blank"
            className="navbar-navlink"
          >
            Tu Mousepad
          </a>
          <a
            href="https://www.mgmgamers.store/contacto/"
            target="_blank"
            className="navbar-navlink"
          >
            Contacto
          </a>
        </div>

        <div className="navbar-rigth">
          <a
            href="https://mgmgamers.store"
            target="_blank"
            className="navbar-navlink"
            id="web"
          >
            Website
          </a>
          <a
            href="https://www.instagram.com/mgmgamers.store"
            target="_blank"
            className="navbar-navlink"
          >
            <img className="instagram_logo" src={instagram_logo}></img>
          </a>
          <button className="burger-menu-button" onClick={handleMenuToggle}>
            {!isOpen && (
              <>
                <img className="burger-img" src={burger}></img>
              </>
            )}

            {isOpen && (
              <>
                <img className="burger-img" src={burger_close}></img>
              </>
            )}
          </button>
          {isOpen && (
            <nav className="burger-menu">
              <div className="burger-container">
                <Link
                  activeClass="active"
                  to="img-container"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                >
                  <a target="_blank" className="navbar-navlink">
                    Personalizar
                  </a>
                </Link>

                <a
                  href="https://tu-mousepad.mgmgamers.store/"
                  target="_blank"
                  className="navbar-navlink"
                >
                  Tu Mousepad
                </a>
                <a
                  href="https://www.mgmgamers.store/contacto/"
                  target="_blank"
                  className="navbar-navlink"
                >
                  Contacto
                </a>
                <a
                  href="https://www.mgmgamers.store"
                  target="_blank"
                  className="navbar-navlink"
                >
                  Website
                </a>
                <a
                  href="https://www.instagram.com/mgmgamers.store"
                  target="_blank"
                >
                  <div className="insta-container">
                    <img
                      className="instagram_logo_2"
                      src={instagram_logo}
                    ></img>
                  </div>
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc

export default Navbar;
