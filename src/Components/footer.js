import React from "react";
import "../css/footer.css";
<<<<<<< HEAD

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección superior con columnas */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Más de nosotros</h3>
            <ul>
              <li>
                <a href="https://mgmgamers.store/" target="_blank">Nuestros productos</a>
              </li>
              <li>
                <a href="https://www.instagram.com/mgmgamers.store/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/mgmgamers.store" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@mgmgamers" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>¿Necesitas ayuda?</h3>
            <ul>
              <li>
                <a href="https://mgmgamers.store/centro-de-ayuda" target="_blank">Ayuda</a>
              </li>
              <li>
                <a href="https://mgmgamers.store/contacto/" target="_blank">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="http://qr.afip.gob.ar/?qr=yvk6uqbDUlSZcWG1E6sQ9Q,," target="_blank">ARCA</a>
              </li>
              <li>
                <a href="https://mgmgamers.store/centro-de-ayuda" target="_blank">Términos y Condiciones</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>San Juan, Argentina</h3>
          </div>
        </div>
        {/* Sección inferior con copyright */}
        <div className="footer-bottom">
          <p>© 2025 MGM Gamers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
=======
import Logo from "../img/Logo.svg";
import wsp from "../img/wsp.svg";
import insta from "../img/insta.svg";
import tiktok from "../img/tiktok.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo-main" src={Logo}></img>
      <div className="footer-links">
        <a
          href="https://mgmgamers.store/mousepads/personalizados/"
          target="_blank"
          className="footer-a"
        >
          <h3 className="footer-name">Personalizados</h3>
        </a>
        <a
          href="https://www.mgmgamers.store/"
          target="_blank"
          className="footer-a"
        >
          <h3 className="footer-name">Website Oficial</h3>
        </a>
        <a
          href="https://mgmgamers.store/contacto/"
          target="_blank"
          className="footer-a"
        >
          <h3 className="footer-name">Contacto</h3>
        </a>
      </div>
      <div className="footer-link-logos">
        <a href="https://wa.link/1iphh6" target="_blank">
          <img className="footer-logo" src={wsp}></img>
        </a>
        <a href="https://www.instagram.com/mgmgamers.store" target="_blank">
          <img className="footer-logo" src={insta}></img>
        </a>
        <a
          href="https://www.tiktok.com/@mgmgamers?_t=8jiR0EVmARa&_r=1"
          target="_blank"
        >
          <img className="footer-logo" src={tiktok}></img>
        </a>
      </div>
      <div className="footer-rights">
        ©2024 MgM Company.
        <br />
        <br />
        Todos los derechos reservados.
      </div>
    </div>
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
  );
};

export default Footer;
