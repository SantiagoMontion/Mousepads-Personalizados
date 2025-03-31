<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "../css/MousepadContainer.css";

import Pro from "./Pro.js"
import Alfombra from "./Alfombra.js"
import Classic from "./Classic.js"
import Logo from '../img/Logo.svg';
import { useNavigate } from 'react-router-dom';



import queryString from 'query-string';


const MousepadContainer = ({ onFileChange, file, setFile , onFileRemove , fileInputRef }) => {
  const navigate = useNavigate();
  const [selectedClient, setSelectedClient] = useState(null);
  const [Bandera, setBandera] = useState("");

=======
import React, { useState } from "react";
import "../css/MousepadContainer.css";
import upLines from "../img/upLines.svg";
import icon_rotation from "../img/espejo.svg";
import icon_center from "../img/center.svg";
import Button from "./Button.js";

import icon_up from "../img/icon _arrow up.svg";
import icon_left from "../img/icon _arrow left.svg";
import icon_right from "../img/icon _arrow right.svg";
import icon_down from "../img/icon _arrow down.svg";
import downLines from "../img/downLines.png";
import girar from "../img/girar.svg";
import ContactForm from "./Form.js";
import rellenar from "../img/rellenar.svg";
import ajustar from "../img/ajustar.svg";
import medidas from "../img/medidas.svg";
import estirar from "../img/estirar.svg";
import alinear from "../img/alinear.svg";
import ajustes from "../img/ajustes.svg";
import question from "../img/question.svg";
import upLinesmobile from "../img/upLines-mobile.svg";
import downLinesmobile from "../img/downLines-mobile.svg";

function MousepadContainer() {
  const [selectedClient, setSelectedClient] = useState(""); //default value
  const [Bandera, setBandera] = useState("");
  const [file, setFile] = useState();
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
  const [Align, setAlign] = useState("center");
  const [Justify, setJustify] = useState("center");
  const [isMirrored, setIsMirrored] = useState(false);
  const [imageMode, setImageMode] = useState("cover");
<<<<<<< HEAD
=======

>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
  const [rotacion, setRotacion] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);
  const [div3Visible, setDiv3Visible] = useState(false);
<<<<<<< HEAD
  const [warningMessage, setWarningMessage] = useState('');
  const [mode, setMode] = useState("Clasic");
  const [preview, setPreview] = useState("");

  const [isCircular, setIsCircular] = useState(false);

// Función para alternar la forma de la imagen
  const toggleCircular = () => {
    setIsCircular((prev) => !prev);
  };

  

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreview("");
    }
  }, [file]);


  const handleModeChange = (newMode) => {
     // Agrega un log para verificar que la función se está ejecutando
    setMode(newMode);
    setJustify("center");
    setAlign("center");
    setRotacion(0);
    setSelectedClient(null)
    setWarningMessage("")
    setIsCircular(false)
    
  };

  const handleClickForm = () => {
    // Verifica si 'file' y 'selectedClient' tienen valores
    
    if (!file || !selectedClient) {
      
      setWarningMessage("Por favor, selecciona un archivo y una medida antes de continuar.");
      return; // Detiene la ejecución si alguno está vacío
    }

    // Si ambos valores existen, limpiamos el mensaje de advertencia
    setWarningMessage('');

    // Continuamos con la creación de los parámetros de consulta
    const queryParams = queryString.stringify({
      selectedClient,
      Align,
      file,
      Justify,
      isMirrored,
      imageMode,
      selectedColor,
      rotacion,
      widthCm,
      heightCm,
      mode,
      isCircular
    });

    // Navegamos al formulario con los parámetros
    navigate(`/formulario?${queryParams}`);
=======
  const [mode, setMode] = useState("Clasic"); // default: "Clasic"
  const precios = {
    S: "9.500",
    M: "17.000",
    L: "19.000",
    XL: "26.000",
    XXL: "31.000",
    XXXL: "66.000",
  };

  const preciospro = {
    PRO: "25.000",
    PROPLUS: "35.000",
  };
  const handleModeChange = (newMode) => {
    setMode(newMode);
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
  };

  const handleButtonClick = (divNumber) => {
    // Verificar si el div clickeado ya está abierto, en ese caso cerrarlo
    if (
      (divNumber === 1 && div1Visible) ||
      (divNumber === 2 && div2Visible) ||
      (divNumber === 3 && div3Visible)
    ) {
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(false);
    } else {
      // Cerrar todos los divs
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(false);

      // Abrir el div clickeado
      switch (divNumber) {
        case 1:
          setDiv1Visible(true);
          break;
        case 2:
          setDiv2Visible(true);
          break;
        case 3:
          setDiv3Visible(true);
          break;
        default:
          break;
      }
    }
  };
  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const toggleImageMode = (mode) => {
    setImageMode(mode);
  };

  const handleRotation = () => {
    setIsMirrored(!isMirrored);
  };

<<<<<<< HEAD
  const handleWidthChange = (event) => {
    const value = Number(event.target.value);
    let newValue;
  
    if (mode === "Pro") {
      newValue = value <= 120 ? value : 120;
    } else if (mode === "Alfombra") {
      newValue = value <= 140 ? value : 140;
    } else { // Clasic
      newValue = value <= 140 ? value : 140;
    }
  
    setWidthCm(newValue);
  };
  
  const handleHeightChange = (event) => {
    const value = Number(event.target.value);
    let newValue;
  
    if (mode === "Pro") {
      newValue = value <= 60 ? value : 60;
    } else if (mode === "Alfombra") {
      newValue = value <= 100 ? value : 100;
    } else { // Clasic
      newValue = value <= 100 ? value : 100;
    }
  
    setHeightCm(newValue);
  };
  
  // Cuando el modo cambia, restablecemos o ajustamos los valores de ancho y alto
  useEffect(() => {
    if (mode === "Pro") {
      if (widthCm > 120) setWidthCm(120);
      if (heightCm > 60) setHeightCm(60);
    } else if (mode === "Alfombra") {
      if (widthCm > 140) setWidthCm(140);
      if (heightCm > 100) setHeightCm(100);
    } else { // Clasic
      if (widthCm > 140) setWidthCm(140);
      if (heightCm > 100) setHeightCm(100);
    }
  }, [mode]);
=======
  function handleWidthChange(event) {
    const value = event.target.value;
    const newValue = value <= 150 ? value : 150;
    setWidthCm(newValue);
  }

  function handleHeightChange(event) {
    const value = event.target.value;
    setHeightCm(value <= 100 ? value : 100);
  }
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc

  const [widthCm, setWidthCm] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const pixelsPerCm = 28.3444444446;

  function convertToPixels() {
    const widthPixels = widthCm * pixelsPerCm;
    const heightPixels = heightCm * pixelsPerCm;

    return {
      width: Math.trunc(widthPixels / 5.1),
      height: Math.trunc(heightPixels / 5.1),
    };
  }

<<<<<<< HEAD
=======
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setBandera("true");
  };
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc

  function handleSelectChange(string) {
    // Verificar si el valor es válido y no debe quedar como "x" o vacío
    if (!string || string.trim() === "x") {
      console.warn(
        "Valor inválido para la medida, estableciendo un valor predeterminado."
      );
      setSelectedClient(""); // O cualquier valor predeterminado adecuado
    } else {
      setSelectedClient(string);
<<<<<<< HEAD
      
=======
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
    }
  }

  function handleAlign(string) {
    setAlign(string);
  }

  function handlejustify(string) {
    setJustify(string);
  }

  const { height, width } = convertToPixels();

  const handleMouseEnter = () => {
    setMostrarDiv(true);
  };

  const handleMouseLeave = () => {
    setMostrarDiv(false);
  };

  const rotarImagen = () => {
<<<<<<< HEAD
    
    if (file) {
      
=======
    if (file) {
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
      const reader = new FileReader();
      setRotacion((rotacion + 90) % 360);

      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;

        image.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Configura el canvas según la rotación deseada
          canvas.width = image.height;
          canvas.height = image.width;

          // Rota la imagen y la dibuja en el canvas
          ctx.rotate((90 * Math.PI) / 180);
          ctx.drawImage(image, 0, -canvas.width);

          // Convierte el canvas de nuevo a un objeto Blob
          canvas.toBlob((blob) => {
            const rotatedFile = new File([blob], file.name, {
              type: file.type,
            });
            setFile(rotatedFile);
          }, file.type);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  return (
<<<<<<< HEAD
    <div className="mousepad-container">
      <div className="selector-size-container">
        {/* Botones para seleccionar el modo */}
        
        <div className="mode-buttons" >
          <div className="mode-logo">
          <img src={Logo} alt="Logo" />
          </div>
          <button
            onClick={() => handleModeChange("Clasic")}
            className={`btn-mode ${mode === "Clasic" ? "active" : ""}`}
          >
            CLASSIC
          </button>
          <button
            onClick={() => handleModeChange("Pro")}
            className={`btn-mode ${mode === "Pro" ? "active" : ""}`}
          >
            PRO
          </button>
          <button
            onClick={() => handleModeChange("Alfombra")}
            className={`btn-mode ${mode === "Alfombra" ? "active" : ""}`}
          >
            ALFOMBRA
          </button>
        </div>


        
    <div className="component-container">
        
        {mode === "Clasic" ? (
          <Classic 
            warningMessage={warningMessage}
            handleClickForm={handleClickForm}
            fileInputRef={fileInputRef}
            onFileChange={onFileChange}
            onFileRemove={onFileRemove}
            div1Visible={div1Visible}
            div2Visible={div2Visible}
            widthCm={widthCm}
            mode={mode}
            heightCm={heightCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
            width={width}
            handleChangeColor={handleChangeColor}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            mostrarDiv={mostrarDiv}
            selectedColor={selectedColor}
            Justify={Justify}
            Align={Align}
            file={preview}
            handleAlign={handleAlign}
            handlejustify={handlejustify}
            handleHeightChange={handleHeightChange}
            handleWidthChange={handleWidthChange}
            handleSelectChange={handleSelectChange}
            handleButtonClick={handleButtonClick}
            toggleImageMode={toggleImageMode}
            rotarImagen={rotarImagen}
            handleRotation={handleRotation}
          />
        ) : mode === "Alfombra" ? (
          <Alfombra 
          
            toggleCircular={toggleCircular}
            isCircular={isCircular}
            warningMessage={warningMessage}
            handleClickForm={handleClickForm}
            fileInputRef={fileInputRef}
            onFileChange={onFileChange}
            onFileRemove={onFileRemove}
            div1Visible={div1Visible}
            div2Visible={div2Visible}
            widthCm={widthCm}
            mode={mode}
            heightCm={heightCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
            width={width}
            handleChangeColor={handleChangeColor}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            mostrarDiv={mostrarDiv}
            selectedColor={selectedColor}
            Justify={Justify}
            Align={Align}
            file={preview}
            handleAlign={handleAlign}
            handlejustify={handlejustify}
            handleHeightChange={handleHeightChange}
            handleWidthChange={handleWidthChange}
            handleSelectChange={handleSelectChange}
            handleButtonClick={handleButtonClick}
            toggleImageMode={toggleImageMode}
            rotarImagen={rotarImagen}
            handleRotation={handleRotation}
          />
        ) : (
          <Pro 
            warningMessage={warningMessage}
            handleClickForm={handleClickForm}
            fileInputRef={fileInputRef}
            onFileChange={onFileChange}
            onFileRemove={onFileRemove}
            div1Visible={div1Visible}
            div2Visible={div2Visible}
            widthCm={widthCm}
            mode={mode}
            heightCm={heightCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
            width={width}
            handleChangeColor={handleChangeColor}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            mostrarDiv={mostrarDiv}
            selectedColor={selectedColor}
            Justify={Justify}
            Align={Align}
            file={preview}
            handleAlign={handleAlign}
            handlejustify={handlejustify}
            handleHeightChange={handleHeightChange}
            handleWidthChange={handleWidthChange}
            handleSelectChange={handleSelectChange}
            handleButtonClick={handleButtonClick}
            toggleImageMode={toggleImageMode}
            rotarImagen={rotarImagen}
            handleRotation={handleRotation}
          />
        )}

</div>
        

      
        

        
=======
    <div className="selector-size-container">
      <h2 className="selector-size-title">CREA TU MOUSEPAD PERFECTO</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => handleModeChange("Clasic")}
          className="btn-big-2"
        >
          Clasic
        </button>
        <button onClick={() => handleModeChange("Pro")} className="btn-big-2">
          Pro
        </button>
      </div>
      <img src={upLines} className="up-lines" id="up-lines-pc"></img>
      <img src={upLinesmobile} className="up-lines" id="up-lines-mobile"></img>
      {mode === "Clasic" ? (
        <>
          <div className="selector_size">
            <div className="big-pannel">
              <div className="option-pannels">
                <div className="left-pannel">
                  <div className="left-pannel-container-mobile">
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Ajustes
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(1)}
                      >
                        <img src={ajustes}></img>
                      </a>
                    </div>
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Medida
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(2)}
                      >
                        <img src={medidas}></img>
                      </a>
                    </div>
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Alinear
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(3)}
                      >
                        <img src={alinear}></img>
                      </a>
                    </div>

                    <div className={`content ${div1Visible ? "active" : ""}`}>
                      <div className="pannel-thin" id="left-pannel">
                        <div className="button-adjust">
                          <p className="button-adjust-text">Rellenar</p>
                          <Button
                            img={rellenar}
                            value="contain"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>

                        <div className="button-adjust">
                          <p className="button-adjust-text">CUBRIR</p>
                          <Button
                            img={ajustar}
                            value="cover"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">Estirar</p>
                          <Button
                            img={estirar}
                            value="fill"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">GIRAR</p>
                          <Button
                            img={girar}
                            className="btn"
                            onClickHandler={rotarImagen}
                            value=""
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">Espejo</p>
                          <Button
                            img={icon_rotation}
                            className="btn"
                            onClickHandler={handleRotation}
                            value=""
                          ></Button>
                        </div>
                      </div>
                    </div>
                    <div className={`content ${div2Visible ? "active" : ""}`}>
                      <div className="pannel-thin">
                        <h4 className="pannel-mini-text">Estándares</h4>
                        <div className="pannel-btn-doble">
                          <button
                            className="btn-big"
                            onClick={() => handleSelectChange("S")}
                          >
                            S <br></br>(25x25CM)
                          </button>
                          <button
                            className="btn-big"
                            onClick={() => handleSelectChange("M")}
                          >
                            M <br></br>(82x32CM)
                          </button>
                          <button
                            className="btn-big"
                            onClick={() => handleSelectChange("L")}
                          >
                            L <br></br>(90x40CM)
                          </button>
                          <button
                            className="btn-big"
                            onClick={() => handleSelectChange("XL")}
                          >
                            XL <br></br>(100x60CM)
                          </button>
                          <button
                            className="btn-big"
                            onClick={() => handleSelectChange("XXL")}
                          >
                            XXL <br></br>(110x70CM)
                          </button>
                          <button
                            className="btn-big"
                            onClick={() => {
                              handleSelectChange("XXXL");
                            }}
                          >
                            XXXL <br></br>(150x100CM)
                          </button>
                        </div>
                        <h4 className="pannel-mini-text">Personalizadas</h4>

                        <div className="perso-options">
                          <div className="input-perso-container">
                            <input
                              className="perso-input"
                              type="number"
                              value={widthCm}
                              pattern="[0-9]*"
                              onChange={handleWidthChange}
                              placeholder="Largo (cm)"
                            />
                          </div>
                          <h5 className="cross">X</h5>

                          <div className="input-perso-container">
                            <input
                              className="perso-input"
                              type="number"
                              pattern="[0-9]*"
                              value={heightCm}
                              onChange={handleHeightChange}
                              placeholder="Ancho (cm)"
                            />
                          </div>
                          <button
                            className="btn-big-apply"
                            onClick={() => {
                              handleSelectChange("PERSO");
                            }}
                          >
                            Aplicar
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`content ${div3Visible ? "active3" : ""}`}>
                      <div className="pannel-thin" id="right-pannel">
                        <div className="button-adjust" id="align-space">
                          <Button
                            disabled
                            img={icon_left}
                            className="btn"
                            onClickHandler={handlejustify}
                            value="left"
                          ></Button>
                        </div>

                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_center}
                            className="btn"
                            onClickHandler={function (event) {
                              handleAlign("center");
                              handlejustify("center");
                            }}
                            value="center"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_right}
                            className="btn"
                            onClickHandler={handlejustify}
                            value="right"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_up}
                            className="btn"
                            onClickHandler={handleAlign}
                            value="top"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_down}
                            className="btn"
                            onClickHandler={handleAlign}
                            value="bottom"
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">Ajustes</h5>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Rellenar</p>
                      <Button
                        img={rellenar}
                        value="contain"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>

                    <div className="button-adjust">
                      <p className="button-adjust-text">CUBRIR</p>
                      <Button
                        img={ajustar}
                        value="cover"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Estirar</p>
                      <Button
                        img={estirar}
                        value="fill"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">GIRAR</p>
                      <Button
                        img={girar}
                        className="btn"
                        onClickHandler={rotarImagen}
                        value=""
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Espejo</p>
                      <Button
                        img={icon_rotation}
                        className="btn"
                        onClickHandler={handleRotation}
                        value=""
                      ></Button>
                    </div>
                  </div>
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">Alinear</h5>

                    <div className="button-adjust" id="align-space">
                      <Button
                        disabled
                        img={icon_left}
                        className="btn"
                        onClickHandler={handlejustify}
                        value="left"
                      ></Button>
                    </div>

                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_center}
                        className="btn"
                        onClickHandler={function (event) {
                          handleAlign("center");
                          handlejustify("center");
                        }}
                        value="center"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_right}
                        className="btn"
                        onClickHandler={handlejustify}
                        value="right"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_up}
                        className="btn"
                        onClickHandler={handleAlign}
                        value="top"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_down}
                        className="btn"
                        onClickHandler={handleAlign}
                        value="bottom"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-pannel">
                <div className="img-container">
                  {selectedClient === "S" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className={`contenedor-imagen ${selectedColor}`}
                            id="scalable-image"
                            style={{ height: "145px", width: "145px" }}
                          >
                            <img
                              className="complete-img"
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">Precio: ${precios.S}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {(selectedClient === "M" || selectedClient === "none") && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-m"
                            style={{ height: "177px", width: "455px" }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">Precio: ${precios.M}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {selectedClient === "L" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-l"
                            style={{ height: "222px", width: "500px" }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">Precio: ${precios.L}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {selectedClient === "XL" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-xl"
                            style={{ height: "333px", width: "555px" }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">
                              Precio: ${precios.XL}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {selectedClient === "XXL" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-xxl"
                            style={{ height: "389px", width: "611px" }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">
                              Precio: ${precios.XXL}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {selectedClient === "XXXL" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-xxxl"
                            style={{
                              height: "34.68em",
                              width: "52.06em",
                            }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">
                              Precio: ${precios.XXXL}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {selectedClient === "PERSO" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            style={{
                              height: `${height}px`,
                              width: `${width}px`,
                            }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Align} ${Justify} `,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <span className="precio">
                            El precio se cotiza según la medida, una vez enviado
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {imageMode == "contain" && Bandera && (
                <div className="background-colors">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="black"
                      checked={selectedColor === "black"}
                      onChange={handleChangeColor}
                    />
                    <span className="radio-custom black-background"></span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="white"
                      checked={selectedColor === "white"}
                      onChange={handleChangeColor}
                    />
                    <span className="radio-custom white-background"></span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="ia"
                      checked={selectedColor === `ia`}
                      onChange={handleChangeColor}
                    />

                    <span className="radio-custom ia-background"></span>
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img className="question" src={question}></img>

                      {mostrarDiv && (
                        <div className="ia-text">
                          Se completa el diseño con IA (photoshop), el resultado
                          se muestra por mail.
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              )}
            </div>
            <div className="right-pannel">
              <div className="only-size">
                <h3 className="pannel-title">Medidas</h3>
                <h4 className="pannel-mini-text">Estándares</h4>
                <div className="pannel-btn-doble">
                  <button
                    className="btn-big"
                    onClick={() => handleSelectChange("S")}
                  >
                    S <br></br>(25x25CM)
                  </button>

                  <button
                    className="btn-big"
                    onClick={() => handleSelectChange("M")}
                  >
                    M <br></br>(82x32CM)
                  </button>
                  <button
                    className="btn-big"
                    onClick={() => handleSelectChange("L")}
                  >
                    L <br></br>(90x40CM)
                  </button>
                  <button
                    className="btn-big"
                    onClick={() => handleSelectChange("XL")}
                  >
                    XL <br></br>(100x60CM)
                  </button>
                  <button
                    className="btn-big"
                    onClick={() => handleSelectChange("XXL")}
                  >
                    XXL <br></br>(110x70CM)
                  </button>
                  <button
                    className="btn-big"
                    onClick={() => {
                      handleSelectChange("XXXL");
                    }}
                  >
                    XXXL <br></br>(150x100CM)
                  </button>
                </div>
                <h4 className="pannel-mini-text">Personalizadas</h4>

                <div className="perso-options">
                  <div className="input-perso-container">
                    <input
                      className="perso-input"
                      type="number"
                      value={widthCm}
                      pattern="[0-9]*"
                      onChange={handleWidthChange}
                      placeholder="Largo (cm)"
                    />
                  </div>
                  <h5 className="cross">X</h5>

                  <div className="input-perso-container">
                    <input
                      className="perso-input"
                      type="number"
                      pattern="[0-9]*"
                      value={heightCm}
                      onChange={handleHeightChange}
                      placeholder="Ancho (cm)"
                    />
                  </div>
                  <button
                    className="btn-big-apply"
                    onClick={() => {
                      handleSelectChange("PERSO");
                    }}
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="selector_size">
            <div className="big-pannel">
              <div className="option-pannels">
                <div className="left-pannel">
                  <div className="left-pannel-container-mobile">
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Ajustes
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(1)}
                      >
                        <img src={ajustes}></img>
                      </a>
                    </div>
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Medida
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(2)}
                      >
                        <img src={medidas}></img>
                      </a>
                    </div>
                    <div>
                      <h5 className="left-pannel-title" id="title-mini">
                        Alinear
                      </h5>
                      <a
                        className="button-open"
                        onClick={() => handleButtonClick(3)}
                      >
                        <img src={alinear}></img>
                      </a>
                    </div>

                    <div className={`content ${div1Visible ? "active" : ""}`}>
                      <div className="pannel-thin" id="left-pannel">
                        <div className="button-adjust">
                          <p className="button-adjust-text">Rellenar</p>
                          <Button
                            img={rellenar}
                            value="contain"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>

                        <div className="button-adjust">
                          <p className="button-adjust-text">CUBRIR</p>
                          <Button
                            img={ajustar}
                            value="cover"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">Estirar</p>
                          <Button
                            img={estirar}
                            value="fill"
                            onClickHandler={toggleImageMode}
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">GIRAR</p>
                          <Button
                            img={girar}
                            className="btn"
                            onClickHandler={rotarImagen}
                            value=""
                          ></Button>
                        </div>
                        <div className="button-adjust">
                          <p className="button-adjust-text">Espejo</p>
                          <Button
                            img={icon_rotation}
                            className="btn"
                            onClickHandler={handleRotation}
                            value=""
                          ></Button>
                        </div>
                      </div>
                    </div>
                    <div className={`content ${div2Visible ? "active" : ""}`}>
                      <div className="pannel-thin">
                        <h4 className="pannel-mini-text">Estándares</h4>
                        <div className="pannel-btn-doble-2">
                          <button
                            className="btn-big-3"
                            onClick={() => handleSelectChange("PRO")}
                          >
                            PRO <br></br>(50x40CM)
                          </button>

                          <button
                            className="btn-big-3"
                            onClick={() => handleSelectChange("L")}
                          >
                            PRO Plus <br></br>(90x40CM)
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`content ${div3Visible ? "active3" : ""}`}>
                      <div className="pannel-thin" id="right-pannel">
                        <div className="button-adjust" id="align-space">
                          <Button
                            disabled
                            img={icon_left}
                            className="btn"
                            onClickHandler={handlejustify}
                            value="left"
                          ></Button>
                        </div>

                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_center}
                            className="btn"
                            onClickHandler={function (event) {
                              handleAlign("center");
                              handlejustify("center");
                            }}
                            value="center"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_right}
                            className="btn"
                            onClickHandler={handlejustify}
                            value="right"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_up}
                            className="btn"
                            onClickHandler={handleAlign}
                            value="top"
                          ></Button>
                        </div>
                        <div className="button-adjust" id="align-space">
                          <Button
                            img={icon_down}
                            className="btn"
                            onClickHandler={handleAlign}
                            value="bottom"
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">Ajustes</h5>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Rellenar</p>
                      <Button
                        img={rellenar}
                        value="contain"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>

                    <div className="button-adjust">
                      <p className="button-adjust-text">CUBRIR</p>
                      <Button
                        img={ajustar}
                        value="cover"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Estirar</p>
                      <Button
                        img={estirar}
                        value="fill"
                        onClickHandler={toggleImageMode}
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">GIRAR</p>
                      <Button
                        img={girar}
                        className="btn"
                        onClickHandler={rotarImagen}
                        value=""
                      ></Button>
                    </div>
                    <div className="button-adjust">
                      <p className="button-adjust-text">Espejo</p>
                      <Button
                        img={icon_rotation}
                        className="btn"
                        onClickHandler={handleRotation}
                        value=""
                      ></Button>
                    </div>
                  </div>
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">Alinear</h5>

                    <div className="button-adjust" id="align-space">
                      <Button
                        disabled
                        img={icon_left}
                        className="btn"
                        onClickHandler={handlejustify}
                        value="left"
                      ></Button>
                    </div>

                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_center}
                        className="btn"
                        onClickHandler={function (event) {
                          handleAlign("center");
                          handlejustify("center");
                        }}
                        value="center"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_right}
                        className="btn"
                        onClickHandler={handlejustify}
                        value="right"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_up}
                        className="btn"
                        onClickHandler={handleAlign}
                        value="top"
                      ></Button>
                    </div>
                    <div className="button-adjust" id="align-space">
                      <Button
                        img={icon_down}
                        className="btn"
                        onClickHandler={handleAlign}
                        value="bottom"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-pannel">
                <div className="img-container">
                  {selectedClient === "S" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className={`contenedor-imagen ${selectedColor}`}
                            id="scalable-image"
                            style={{ height: "222px", width: "300px" }}
                          >
                            <img
                              className="complete-img"
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">
                              Precio: ${preciospro.PRO}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {selectedClient === "L" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            id="scalable-image-l"
                            style={{ height: "222px", width: "500px" }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Justify} ${Align}`,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <div className="price-div">
                            <span className="precio">
                              Precio: ${preciospro.PROPLUS}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {selectedClient === "PERSO" && (
                    <>
                      {Bandera === "true" && (
                        <div>
                          <div
                            className="contenedor-imagen"
                            style={{
                              height: `${height}px`,
                              width: `${width}px`,
                            }}
                          >
                            <img
                              className="complete-img"
                              id={`${selectedColor}`}
                              style={{
                                objectPosition: `${Align} ${Justify} `,
                                transform: isMirrored
                                  ? "scaleX(-1)"
                                  : "scaleX(1)",
                                objectFit: imageMode,
                                backgroundColor: `${selectedColor} `,
                              }}
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <span className="precio">
                            El precio se cotiza según la medida, una vez enviado
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {imageMode == "contain" && Bandera && (
                <div className="background-colors">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="black"
                      checked={selectedColor === "black"}
                      onChange={handleChangeColor}
                    />
                    <span className="radio-custom black-background"></span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="white"
                      checked={selectedColor === "white"}
                      onChange={handleChangeColor}
                    />
                    <span className="radio-custom white-background"></span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="ia"
                      checked={selectedColor === `ia`}
                      onChange={handleChangeColor}
                    />

                    <span className="radio-custom ia-background"></span>
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img className="question" src={question}></img>

                      {mostrarDiv && (
                        <div className="ia-text">
                          Se completa el diseño con IA (photoshop), el resultado
                          se muestra por mail.
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              )}
            </div>
            <div className="right-pannel">
              <div className="only-size">
                <h3 className="pannel-title">Medidas</h3>
                <h4 className="pannel-mini-text">Estándares</h4>
                <div className="pannel-btn-doble-2">
                  <button
                    className="btn-big-3"
                    onClick={() => handleSelectChange("S")}
                  >
                    PRO <br></br>(50x40CM)
                  </button>

                  <button
                    className="btn-big-3"
                    onClick={() => handleSelectChange("L")}
                  >
                    PRO Plus <br></br>(90x40CM)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <img src={downLines} className="up-lines" id="down-lines-pc"></img>
      <img
        src={downLinesmobile}
        className="up-lines"
        id="down-lines-mobile"
      ></img>

      <div class="container-mail">
        <div class="left-column-mail">
          <h2 className="selector-size-title">Hace realidad tu mousepad</h2>
          <h4 className="scroll-left-text">
            Últimos pasos! Ya estas más cerca del mousepad de tus sueños 🙌{" "}
            <br />
            <br />
            Rellena el formulario con los datos solicitados, así el diseñador lo
            arma como le indicaste y te pasa el link para la compra 🤩
          </h4>
          <h2 className="title-mail">FORMULARIO</h2>
          <ContactForm
            medida={selectedClient}
            Align={Align}
            Justify={Justify}
            isMirrored={isMirrored}
            imageMode={imageMode}
            file={file}
            handleChange={handleChange}
            Color={selectedColor}
            rotacion={rotacion}
            width={widthCm}
            height={heightCm}
            mode={mode}
          />
        </div>
        <div class="right-column-mail"></div>
      </div>

      <div className="phrase-container">
        <h4>Te ayudamos a crear 🖌️🙌</h4>
>>>>>>> 310f5ed0a8834dec3cef659d7bd08cc2fcc22edc
      </div>
    </div>
  );
}

export default MousepadContainer;
