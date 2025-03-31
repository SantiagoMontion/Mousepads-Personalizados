import React, { useState } from "react";
import Settings from "./settings.js";
import Calculadora from "./Calculadora.js";
import '../css/MousepadContainer.css';
import Upload from '../img/upload.svg';
import UploadLogo from '../img/upload-logo.svg';
import cruz from "../img/cruz.svg"
import girar from "../img/girar.svg"

function Classic({
  selectedColor,
  Justify,
  Align,
  mode,
  file, // Ya viene con la URL generada (ej. URL.createObjectURL(file))
  handleAlign,
  handlejustify,
  handleButtonClick,
  toggleImageMode,
  rotarImagen,
  handleRotation,
  selectedClient, // valor inicial del padre
  setSelectedClient, // función callback para actualizar el estado en el padre
  isMirrored,
  imageMode,
  height, // Valor fallback en px para PERSO en caso de que no se ingresen medidas
  width,
  handleChangeColor,
  handleMouseEnter,
  handleMouseLeave,
  mostrarDiv,
  fileInputRef,
  onFileChange,
  onFileRemove,
  handleClickForm,
  warningMessage
 
}) {
  // Estados locales para las medidas personalizadas (en cm)
  const [widthCm, setWidthCm] = useState("");
  const [heightCm, setHeightCm] = useState("");
  
  // Estado para el tamaño seleccionado (local); se inicializa con el que viene o "S" por defecto.
  const [localClient, setLocalClient] = useState(selectedClient || "");
  // Estado para el botón activo; se inicializa con el tamaño seleccionado
  const [activeButton, setActiveButton] = useState(selectedClient || "");

  // Factor de conversión de centímetros a píxeles
  const cmToPx = 5.56;

  // Tamaños estándar preestablecidos para Classic
  const standardSizes = [
    { label: "S", size: "S", dimensions: "25x25" },
    { label: "M", size: "M", dimensions: "82x32CM" },
    { label: "L", size: "L", dimensions: "90x40CM" },
    { label: "XL", size: "XL", dimensions: "100x60CM" },
    { label: "XXL", size: "XXXL", dimensions: "140x100CM" },
  ];

  // Función para actualizar medidas estándar y el tamaño seleccionado
  const selectStandardSize = (size, dimensions) => {
    const parts = dimensions.split("x");
    if (parts.length === 2) {
      const newWidth = parseInt(parts[0].replace(/\D/g, ""), 10);
      const newHeight = parseInt(parts[1].replace(/\D/g, ""), 10);
      setWidthCm(newWidth.toString());
      setHeightCm(newHeight.toString());
      setLocalClient(size);
      if (setSelectedClient) setSelectedClient(size);
      setActiveButton(size);
    }
  };

  // Funciones para los inputs personalizados
  const onWidthChange = (e) => {
    setWidthCm(e.target.value);
  };

  const onHeightChange = (e) => {
    setHeightCm(e.target.value);
  };

  // Se usa el tamaño seleccionado (localClient) para definir la configuración.
  // Si localClient es "none", se toma "M" como valor predeterminado.
  const clientKey =
    localClient && localClient !== "none" ? localClient.toUpperCase() : "M";

  // Configuración para cada tipo de medida
  const isMobile = window.innerWidth <= 768;
const mobileFactor = isMobile ? 0.5 : 1;

const config = {
  S: {
    containerId: "scalable-image",
    containerStyle: { height: `${139 * mobileFactor}px`, width: `${139 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  M: {
    containerId: "scalable-image-m",
    containerStyle: { height: `${177 * mobileFactor}px`, width: `${455 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  L: {
    containerId: "scalable-image-l",
    containerStyle: { height: `${222 * mobileFactor}px`, width: `${500 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  XL: {
    containerId: "scalable-image-xl",
    containerStyle: { height: `${333 * mobileFactor}px`, width: `${555 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  XXL: {
    containerId: "scalable-image-xxl",
    containerStyle: { height: `${389 * mobileFactor}px`, width: `${611 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  XXXL: {
    containerId: "scalable-image-xxxl",
    containerStyle: { height: `${556 * mobileFactor}px`, width: `${778.4 * mobileFactor}px` },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  PERSO: {
    containerId: null,
    containerStyle: {
      height: `${(heightCm ? parseInt(heightCm, 10) : height) * cmToPx * mobileFactor}px`,
      width: `${(widthCm ? parseInt(widthCm, 10) : width) * cmToPx * mobileFactor}px`
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Align} ${Justify}`
  }
};

  const currentConfig = config[clientKey];

  const imageStyle = {
    objectPosition: currentConfig.objectPosition,
    transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
    objectFit: imageMode,
    backgroundColor: selectedColor,
  };

  return (
    <>
      {/* Barra lateral de configuración */}
      <Settings
        widthCm={widthCm}
        handleWidthChange={onWidthChange}
        div1Visible={true}     // Ajusta según la lógica de visibilidad
        div2Visible={true}
        heightCm={heightCm}
        div3Visible={true}
        selectedClient={localClient}
        isMirrored={false}     // Ejemplo: cambia el valor según corresponda
        imageMode={imageMode}  // Puedes ajustar o pasar directamente la prop imageMode
        height={imageStyle?.height}
        width={imageStyle?.width}
        handleChangeColor={handleChangeColor}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        mostrarDiv={mostrarDiv}
        selectedColor={selectedColor}
        Justify={Justify}
        Align={Align}
        file={file}
        handleAlign={handleAlign}
        handlejustify={handlejustify}
        handleSelectChange={selectStandardSize}
        handleButtonClick={handleButtonClick}
        toggleImageMode={toggleImageMode}
        rotarImagen={rotarImagen}
        handleRotation={handleRotation}
        mode={mode}
      />

      {/* Contenedor principal que agrupa el panel central y el derecho */}
      <div className="selector_size-class">
        {/* Panel central: visualización de la imagen */}
        <div className="center-pannel">
          
          
  {file ? (
    <div className="img-container">
      <div
        className={currentConfig.containerClass}
        id={currentConfig.containerId}
        style={currentConfig.containerStyle}
      >
        <img
          className="complete-img"
          id={currentConfig.imageId}
          style={imageStyle}
          src={file}
          alt="Imagen Classic"
        />
      </div>
    </div>
  ) : 
  <div className="custom-file-input">
      <input
        ref={fileInputRef}
        type="file"
        name="upload"
        id="file-upload"
        className="file-input"
        accept="image/png, image/jpeg"
        onChange={onFileChange}
        required
      
      />
      <label htmlFor="file-upload" className="file-label">
        
    <img src={Upload} alt="upload" />
    <div className="upload-container">
    <span>Subir imagen</span>
    <img src={UploadLogo} alt="upload-logo"></img>
    </div>
  </label>
</div>}

<div className="center-down">
  <div className="btn-container">
    <button 
      className="btn-remove-file" 
      title="Rotar"
      onClick={rotarImagen}
    >
      <img src={girar} alt="rotar" />
    </button>
    <div className="price-tooltip-btn">
    Girar imagen
    </div>
  </div>

  <div className="btn-container">
    <button 
      className="btn-remove-file" 
      title="Quitar imagen"
      onClick={onFileRemove}
    >
      <img src={cruz} alt="quitar imagen" />
    </button>
    <div className="price-tooltip-btn">
      Borrar imagen
    </div>
  </div>
</div>
</div>

        {/* Panel derecho: medidas y opciones */}
        <div className="right-pannel">
        <div className="price-section">
  {widthCm && heightCm && (
    <Calculadora
      width={parseInt(widthCm, 10)}
      height={parseInt(heightCm, 10)}
      mode={mode}
    />
  )}
  <div className="price-tooltip">
  Los precios pueden cambiar sin previo aviso,<br></br>
pero siempre te informaremos antes de<br></br>
confirmar tu compra.
  </div>
</div>
        <div className="sep"></div>
          <div className="only-size">
          
            <h3 className="pannel-title">MEDIDAS</h3>
            
            {/* Botones para tamaños estándar */}
            <div className="pannel-btn-doble">
              {standardSizes.map(({ label, size, dimensions }) => (
                <div className="button-cont">
                <button
                  key={size}
                  className={`btn-big ${activeButton === size ? "active" : ""}`}
                  onClick={() => selectStandardSize(size, dimensions)}
                >
                  {label}
                  <label className="btn-text">{dimensions}</label>
                  <label className="btn-text">cm</label>
                </button>
                </div>
              ))}
            </div>
            <h4 className="pannel-title" id="p">PERSONALIZAR</h4>
            {/* Opciones para medidas personalizadas */}
            <div className="perso-options">
            <div className="input-perso-container">
  <span className="static-text">LARGO</span>
  <input
    className="perso-input"
    type="text"
    value={widthCm}
    onChange={onWidthChange}
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (parseInt(e.target.value, 10) > 140) e.target.value = "140";
    }}
    maxLength={3}
  />
  <span className="static-text">cm</span>
</div>
              <h5 className="cross">x</h5>
              <div className="input-perso-container">
  <span className="static-text">ANCHO</span>
  <input
    className="perso-input"
    type="text"
    value={heightCm}
    onChange={onHeightChange}
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (parseInt(e.target.value, 10) > 100) e.target.value = "100";
    }}
    maxLength={3}
  />
  <span className="static-text">cm</span>

  
</div>

              <button
                className={`btn-big-apply ${activeButton === "PERSO" ? "active" : ""}`}
                onClick={() => {
                  // Forzar medida mínima de 25cm por lado
                  const minMeasure = 25;
                  let newWidth = parseInt(widthCm, 10);
                  let newHeight = parseInt(heightCm, 10);
                  if (newWidth < minMeasure) newWidth = minMeasure;
                  if (newHeight < minMeasure) newHeight = minMeasure;
                  setWidthCm(newWidth.toString());
                  setHeightCm(newHeight.toString());
                  // Se asigna el tamaño personalizado
                  setLocalClient("PERSO");
                  setActiveButton("PERSO");
                }}
              >
                Aplicar
              </button>
            </div>
            <div class="cta-container">
              <div className="sep"></div>
  <button class="cta-button" id="p2" onClick={handleClickForm}>ENVIAR DISEÑO</button>
 
  {warningMessage && <div className="warning">{warningMessage}</div>}
  <p class="cta-text">
  ¿Te gustó cómo quedó?✨<br></br>Enviá tu diseño y te mandamos el link de compra.
  </p>
</div>
<div className="sep"></div>
<div class="cta-container">
  <p class="cta-title">INFORMACIÓN</p>
  <p class="cta-text-info">
  Nuestros productos son artesanales y únicos. Su elaboración es de 3/7 días hábiles. Debido a su proceso manual, las medidas pueden tener pequeñas variaciones.
  </p>
</div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Classic;
