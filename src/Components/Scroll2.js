import "../css/Scroll2.css";
import React, { useState } from "react";
import scroll2back from "../img/scroll2back.png";

function Scroll2() {
  return (
    <div className="scroll-2-container">
      <div className="scroll-left-container">
        <h3 className="scroll-left-title">Mini-Editor de MgM Gamers</h3>
        <h4 className="scroll-left-text">
          Con el Mini Editor podrás probar todos los diseños que quieras en la
          medida que mejor se adapte a tu setup y hacerles pequeñas
          modificaciones para que quede como mas te guste 🤩
        </h4>

        <h5 className="scroll-left-recomendation-title">Recomendaciones</h5>
        <div className="scroll-left-recomendation-text-container">
          <ul className="scroll-list" id="pc-list">
            <li className="scroll-left-recomendation-text">
              Antes que nada agarra una regla y medí tu escritorio, ahí te
              <br /> fijas que medida es la que necesitas 👌
              <br />
              <br />
            </li>
            <li className="scroll-left-recomendation-text">
              Asegúrate que la imagen que busques esté en la mejor calidad
              <br />
              posible (4k o más)
              <br />
              <br />
            </li>
            <li className="scroll-left-recomendation-text">
              El editor solo acepta una imagen. Si quieres que te armemos
              <br />
              un collage, mándanos las imágenes al mail
              <br />
              <a className="scroll-link" href="mailto:mgmpads@gmail.com">
                mgmpads@gmail.com{" "}
              </a>
              junto con la medida que quieras
            </li>
          </ul>

          <ul className="scroll-list" id="mobile-list">
            <li className="scroll-left-recomendation-text">
              Antes que nada agarra una regla y medí tu escritorio, ahí te fijas
              que medida es la que necesitas 👌
              <br />
              <br />
            </li>
            <li className="scroll-left-recomendation-text">
              Asegúrate que la imagen que busques esté en la mejor calidad
              posible (4k o más)
              <br />
              <br />
            </li>
            <li className="scroll-left-recomendation-text">
              El editor solo acepta una imagen. Si quieres que te armemos un
              collage, mándanos las imágenes al mail
              <a className="scroll-link" href="mailto:mgmpads@gmail.com">
                mgmpads@gmail.com{" "}
              </a>
              junto con la medida que quieras
              <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
      <div className="scroll2-img-container">
        <img src={scroll2back} alt="bordado" />
      </div>
    </div>
  );
}

export default Scroll2;
