import "../css/Scroll0.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import back1 from "../img/scroll0.png";
import back2 from "../img/scroll02.png";
import back1m from "../img/scroll0movil.png";
import back2m from "../img/scroll0movil2.png";

function Scroll0() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div class="card-container">
        <div className="imagen-fondo">
          <img src={back1} alt="Fondo 1" id="pc" />
          <img
            className="imagen-movil"
            src={back1m}
            alt="Imagen para móvil"
            id="movil"
          />
          <div className="scroll-text">
            <p className="p-scroll">Personaliza la medida 📏</p>
            <p className="p-scroll-2">
              Elegí la medida perfecta para tu setup 👌
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="imagen-fondo">
          <img src={back2} alt="Fondo 2" id="pc" />
          <img
            className="imagen-movil"
            src={back2m}
            alt="Imagen para móvil"
            id="movil"
          />
          <div className="scroll-text">
            <p className="p-scroll">Personaliza el diseño 🖼️</p>
            <p className="p-scroll-2">Tu diseño favorito en tu mousepad 🙌</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Scroll0;
