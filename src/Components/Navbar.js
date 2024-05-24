import Logo from "../img/Logo.svg";
import burger from "../img/burger.svg";
import instagram_logo from "../img/instagram_logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import burger_close from "../img/close.svg";

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

export default Navbar;
