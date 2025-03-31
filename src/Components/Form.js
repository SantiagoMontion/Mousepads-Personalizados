<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import "../css/form.css";
import back from "../img/back.svg"
const ContactForm = ({ file, setFile }) => {
  const location = useLocation();
  const {
    selectedClient,
    Align,
    Justify,
    isMirrored,
    imageMode,
    selectedColor,
    rotacion,
    widthCm,
    heightCm,
    mode,
    isCircular,
  } = queryString.parse(location.search);

  const [nombreModelo, setNombreModelo] = useState('');
  const [comentario, setComentario] = useState('');
  const [formStatus, setFormStatus] = useState(null); // Manejo del estado de éxito o error
  const [loading, setLoading] = useState(false); // Estado para controlar la animación de carga

  const handleNombreModeloChange = (event) => {
    setNombreModelo(event.target.value);
  };

=======
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
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const translateString = (inputString) => {
<<<<<<< HEAD
    if (!inputString) return inputString === "" ? "-" : inputString;

    const translations = {
      left: "izquierda",
      center: "centrado",
      right: "derecha",
      top: "arriba",
      bottom: "abajo",
      fill: "Estirar (Imágen completa)",
      cover: "Cubrir (Recortando)",
      L: "90x40",
      XL: "100x60",
      XXL: "110x70",
      XXXL: "150x100",
      S: "25x25",
      M: "82x32",

      LA: "90x60",
      XLA: "100x70",
      XXLA: "140x100",
      SA: "50x40",
      MA: "70x50",


      LP: "90x40",
      XLP: "120x60",
      SP: "25x25",
      MP: "50x40",

      contain: "Rellenar bordes (contain)",
      false: "No",
      true: "Si",
      
      PERSO: `${widthCm}x${heightCm}`,
    };

    return translations[inputString.toString()] || inputString;
  };

  // Usamos el hook useForm de Formspree para enviar el formulario
  const [state, handleSubmit] = useForm("mvoegrgy");

  // Validación de envío
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verificar si el archivo está disponible (viene de la prop 'file')
    if (!file) {
      alert('Por favor, selecciona un archivo antes de enviar.');
      return;
    }

    // Crear un objeto FormData para enviar el archivo y los demás datos
    const formData = new FormData(event.target); // Esto incluirá todos los datos del formulario, incluido el archivo

    formData.append("file", file); 
    formData.append("nombreModelo", nombreModelo);
    formData.append("comentario", comentario);

    // Agregar otros parámetros adicionales
    formData.append("subject", `Mousepad Personalizado ${nombreModelo} ${translateString(selectedClient)}`);
    formData.append("message",`
      Esta es la configuración:

      Tipo: ${translateString(mode)}
      Circular?: ${translateString(isCircular)}
      Medida: ${translateString(selectedClient)}

      --------------------------

      Nombre del Modelo: ${nombreModelo}
      Comentario extra para el armado: ${comentario}
      Alineación: ${translateString(Align)}
      Justificación: ${translateString(Justify)}
      ¿Modo espejo?: ${translateString(isMirrored)}
      Ajuste de la imagen: ${translateString(imageMode)}
      Color del fondo?: ${translateString(selectedColor)}
      Rotación?: ${translateString(rotacion)}
    `);

    // Usamos Formspree para enviar el formulario con el archivo
    setLoading(true);  // Activar el estado de carga
    handleSubmit(formData);  // Pasamos el formData al handleSubmit de Formspree
  };

  // Manejo de estado de Formspree
  useEffect(() => {
    if (state.succeeded) {
      setFormStatus('success');
      setLoading(false);  // Terminar la carga cuando el formulario se haya enviado
    } else if (state.submitting) {
      setFormStatus('submitting');
    } else if (state.errors && state.errors.length > 0) {
      setFormStatus('error');
      setLoading(false);  // Terminar la carga si hubo un error
    } else {
      setFormStatus(null); // Si no hay errores y no está enviando, limpiamos el estado
      setLoading(false);  // Aseguramos que la carga se termine si no está en proceso
    }
  }, [state]); // Solo se ejecutará cuando 'state' cambie

  return (
    <div className='form-container-all'>
      <div className='left-form'>
      <a href='/'><img src={back}></img></a>
      <h2 className="form-header">
      Completá el<br></br>
formulario para<br></br>
que te enviemos<br></br>
el link de compra
      </h2>
      </div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="form-container">
          <div className="input-container-mail">
            <label className="form-label">Nombre del diseño</label>
            <input
            placeholder='Gatitos lindos'
              className="input-mail"
              type="text"
              name="nombreModelo"
              value={nombreModelo}
              onChange={handleNombreModeloChange}
              required
            />
            <label className="form-label" id="form-space" htmlFor="email">
              Email
            </label>
            <input
            placeholder='ejemplo@gmail.com'
              id="email"
              type="email"
              name="email"
              className="input-mail"
              required
            />
          </div>
          <div className="input-container-mail">
            <label className="form-label" id="form-space">
              Mensaje (Opcional)
            </label>
            <input
              placeholder='Escribí acá detalles que quieras aclarar sobre el diseño'
              type="text"
              name="comentario"
              className="input-mail-big"
              value={comentario}
              onChange={handleComentarioChange}
            />
          </div>
          <button
            className="button-email"
            type="submit"
            disabled={!selectedClient || !file || state.submitting}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : formStatus === "success" ? (
              "Diseño Enviado ✔️"
            ) : formStatus === "error" ? (
              "Error al Enviar 😔"
            ) : (
              "ENVIAR DISEÑO"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

=======
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

        case "PRO":
          return "50x40";
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
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
