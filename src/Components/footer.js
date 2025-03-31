import React from "react";
import "../css/footer.css";

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
  );
};

export default Footer;
