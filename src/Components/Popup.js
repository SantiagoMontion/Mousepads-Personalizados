import React, { useState } from "react";
import "../css/Popup.css";
import popupClose from "../img/popupClose.svg";
const Popup = () => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <span className="close-btn-pop" onClick={handleClose}>
          <img src={popupClose}></img>
        </span>
        <div id="popupPc">
          <h2 className="popup-title">¡Diseño enviado!</h2>
          <p className="popup-text">
            Dentro de las próximas 24hs el diseñador
            <br /> se va a comunicar vía mail con el linkde tu <br /> modelo
            subido a nuestra tienda para la compra. <br /> <br /> Cualquier duda
            háblanos 🙌
          </p>
        </div>
        <div id="popupMobile">
          <h2 className="popup-title">¡Diseño enviado!</h2>
          <p className="popup-text">
            Dentro de las próximas 24hs el diseñador se va a comunicar vía mail
            con el linkde tu modelo subido a nuestra tienda para la compra.{" "}
            <br /> <br /> Cualquier duda háblanos 🙌
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
