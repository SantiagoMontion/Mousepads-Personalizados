import Logo from "./Logo.svg";
import burger from "./burger.svg";
import instagram_logo from "./instagram_logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import burger_close from "./close.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <a href="/">
          <img className="mgm-logo" src={Logo}></img>
        </a>
      </div>
      <div className="navbar-middle">
        <a
          href="https://sites.google.com/view/mgmgamersblog/inicio"
          target="_blank"
          className="navbar-navlink"
        >
          Blog
        </a>

        <a
          href="https://www.mgmgamers.store"
          target="_blank"
          className="navbar-navlink"
        >
          Tienda Oficial
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
          href="https://www.instagram.com/mgmgamers.store"
          target="_blank"
          className="navbar-navlink"
        >
          <img className="instagram_logo" src={instagram_logo}></img>
        </a>
        <button className="burger-menu-button" onClick={handleMenuToggle}>
        {!isOpen && (
            <>
              
              <img  src={burger}></img>
            </>
          )}

        
          {isOpen && (
            <>
              
              <img  src={burger_close}></img>
            </>
          )}
        </button>
        {isOpen && (
          <nav className="burger-menu">
            <div className="burger-container">
              <a
                href="https://www.mgmgamers.store"
                target="_blank"
                className="navbar-navlink"
              >
                Tienda Oficial
              </a>
              <Link
            activeClass="active"
            to="img-container"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="link-t"
          >
              <a
                href="https://www.mgmgamers.store"
                target="_blank"
                className="navbar-navlink"
              >
                Personalizar
              </a></Link>

              <a
                href="https://www.mgmgamers.store/contacto/"
                target="_blank"
                className="navbar-navlink"
              >
                Contacto
              </a>
              <a
                href="https://sites.google.com/view/mgmgamersblog/inicio"
                target="_blank"
                className="navbar-navlink"
              >
                Blog
              </a>
              <a
                href="https://www.instagram.com/mgmgamers.store"
                target="_blank"
                className="navbar-navlink"
              >
                <img className="instagram_logo_2" src={instagram_logo}></img>
              </a>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
