import React from "react";
import "../css/footer.css";
import Logo from "../img/Logo.svg";
import wsp from "../img/wsp.svg";
import insta from "../img/insta.svg";
import tiktok from "../img/tiktok.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo}></img>
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
  );
};

export default Footer;
