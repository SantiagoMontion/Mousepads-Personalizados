import React, { useState } from "react";
import "../css/MousepadContainer.css";
import { useForm, ValidationError } from "@formspree/react";
import uploadlogo from "../img/upload-logo.svg";
import Popup from "./Popup";

function ContactForm(props) {
  const [nombreModelo, setNombreModelo] = useState("");
  const handleNombreModeloChange = (event) => {
    setNombreModelo(event.target.value);
  };
  const [comentario, setComentario] = useState("");
  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const translateString = (inputString) => {
    if (inputString) {
      const stringValue = inputString.toString();

      switch (stringValue) {
        case "left":
          return "izquierda";

        case "center":
          return "centrado";
        case "right":
          return "derecha";
        case "top":
          return "arriba";
        case "bottom":
          return "abajo";
        case "fill":
          return "Estirar (Imágen completa)";
        case "cover":
          return "Cubrir (Recortando)";

        case "L":
          return "90x40";
        case "XL":
          return "100x60";
        case "XXL":
          return "110x70";
        case "XXXL":
          return "150x100";
        case "S":
          return "25x25";
        case "M":
          return "82x32";

        case "contain":
          return "Rellenar bordes (contain)";

        case "false":
          return "No";
        case "true":
          return "Si";
        case "":
          return "-";

        case "PERSO":
          return `${props.width}x${props.height}`;

        default:
          return stringValue;
      }
    }
  };

  const [state, handleSubmit] = useForm("mvoegrgy");

  if (state.succeeded) {
    return <Popup></Popup>;
  }

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div className="form-container">
        <div className="input-container-mail">
          <label className="form-label">El nombre de tu diseño ✍️</label>
          <input
            className="input-mail"
            type="text"
            value={nombreModelo}
            onChange={handleNombreModeloChange}
            required="true"
          />
          <label className="form-label" id="form-space" htmlFor="email">
            Tu mail 📨
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input-mail"
            required
          />
        </div>
        <div className="input-container-mail">
          <label className="form-label" id="form-space">
            Comentarios que quieras agregar 👌
          </label>
          <input
            type="text"
            className="input-mail-big"
            value={comentario}
            onChange={handleComentarioChange}
          />
        </div>

        <button
          className={`button-email ${props.medida} `}
          type="submit"
          disabled={props.medida === "none"}
        >
          Enviar Diseño 🚀
        </button>
        {props.medida === "none" ? (
          <p className="scroll-left-recomendation-text">
            No te olvides seleccionar una medida para tu mousepad
          </p>
        ) : (
          <></>
        )}
      </div>

      <div className="not-visible">
        <input
          className="input-mail"
          name="subject"
          value={`Mousepad Personalizado ${translateString(
            nombreModelo
          )} ${translateString(props.medida)}`}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          type="hidden"
          className="input-mail-big"
          value={`
Esta es la configuración:
Tipo: ${props.mode}
Medida: ${translateString(props.medida)}
Nombre del Modelo: ${translateString(nombreModelo)}
Comentario extra para el armado: ${translateString(comentario)}
Alineación: ${translateString(props.Align)}
Justificación: ${translateString(props.Justify)}
¿Modo espejo?: ${translateString(props.isMirrored)}
Ajuste de la imagen: ${translateString(props.imageMode)}
Color del fondo?: ${props.Color}
Rotacion?: ${props.rotacion}
`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="custom-file-input">
        <input
          type="file"
          name="upload"
          id="file-upload"
          className="file-input"
          accept="image/png, image/jpeg"
          onChange={props.handleChange}
          required="true"
        />

        <label htmlFor="file" className="file-label">
          <p>Subir imagen</p>
          <img className="upload-logo" src={uploadlogo}></img>
        </label>
      </div>
    </form>
  );
}

export default ContactForm;
