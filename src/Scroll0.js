import "./Scroll0.css";

import React, { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

function Scroll0() {
  return (
    <div class="card-container">
      <div class="card" id="card-1">
        <div class="card-content">
          <div class="card-title">
            Ahora podes personalizar<br></br>
            100% tu mousepad.
          </div>
          <div class="card-subtitle">
            Elegí la medida perfecta y el diseño<br></br> que quieras. Nos
            adaptamos a tu setup.
          </div>
          <Link
            activeClass="active"
            to="img-container"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <button class="card-button">Personalizar</button>
          </Link>
        </div>
      </div>
      <div class="card" id="card-2">
        <div class="card-content">
          <div class="card-title">
            Diseños nuevos todos los<br></br>
            meses en nuestra web.
          </div>
          <div class="card-subtitle">
            Explora todos nuestros diseños en <br></br>la pagina web. Calidad
            garantizada.
          </div>
          <a href="https://mgmgamers.store/" target="_blank">
            <button class="card-button">Pagina Web</button>
          </a>
        </div>
      </div>
      <div class="card" id="card-3">
        <div class="card-content">
          <div class="card-title">
            Mas de 500 mousepads<br></br>
            personalizados.
          </div>
          <div class="card-subtitle">
            Descubre los diseños elegidos por otros. <br></br>Tu mousepad
            perfecto puede estar acá.
          </div>
          <a
            href="https://www.mgmgamers.store/mousepads/personalizados/?sort_by=created-descending"
            target="_blank"
          >
            <button class="card-button">Personalizados</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Scroll0;
