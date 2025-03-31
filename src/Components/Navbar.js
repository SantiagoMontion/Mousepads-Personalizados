
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


export default Navbar;
