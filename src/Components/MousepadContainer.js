import React, { useState, useEffect } from "react";
import "../css/MousepadContainer.css";

import Pro from "./Pro.js"
import Alfombra from "./Alfombra.js"
import Classic from "./Classic.js"
import Logo from '../img/Logo.svg';
import { useNavigate } from 'react-router-dom';



import queryString from 'query-string';


const MousepadContainer = ({ onFileChange, file, setFile , onFileRemove , fileInputRef, setPrice }) => {
  const navigate = useNavigate();
  const [selectedClient, setSelectedClient] = useState(null);
  const [Bandera, setBandera] = useState("");
  
  const [Align, setAlign] = useState("center");
  const [Justify, setJustify] = useState("center");
  const [isMirrored, setIsMirrored] = useState(false);
  const [imageMode, setImageMode] = useState("cover");
  const [rotacion, setRotacion] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);
  const [div3Visible, setDiv3Visible] = useState(false);
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
    setPrice("")
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


  function handleSelectChange(string) {
    // Verificar si el valor es válido y no debe quedar como "x" o vacío
    if (!string || string.trim() === "x") {
      console.warn(
        "Valor inválido para la medida, estableciendo un valor predeterminado."
      );
      setSelectedClient(""); // O cualquier valor predeterminado adecuado
    } else {
      setSelectedClient(string);
      
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
    
    if (file) {
      
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
         
        </div>


        
    <div className="component-container">
        
        {mode === "Clasic" ? (
          <Classic 
            setPrice={setPrice}
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
            setHeightCm={setHeightCm}
            setWidthCm={setWidthCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
           
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
            setPrice={setPrice}
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
            setHeightCm={setHeightCm}
            setWidthCm={setWidthCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
            
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
            setPrice={setPrice}
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
            setHeightCm={setHeightCm}
            setWidthCm={setWidthCm}
            div3Visible={div3Visible}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            Bandera={Bandera}
            isMirrored={isMirrored}
            imageMode={imageMode}
            height={height}
            
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
        

      
        

        
      </div>
    </div>
  );
}

export default MousepadContainer;
