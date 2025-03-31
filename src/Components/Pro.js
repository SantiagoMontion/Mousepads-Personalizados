import React, { useState } from "react";
import Settings from "./settings.js";
import Calculadora from "./Calculadora.js";
import Upload from '../img/upload.svg';
import UploadLogo from '../img/upload-logo.svg';
import cruz from "../img/cruz.svg"
import girar from "../img/girar.svg"

function Pro({
  selectedColor,
  preciospro,
  mode,
  precios,
  Justify,
  Align,
  file, // Ya viene con la URL generada (ej. URL.createObjectURL(file))
  handleAlign,
  handlejustify,
  handleButtonClick,
  toggleImageMode,
  rotarImagen,
  handleRotation,
  div1Visible,
  div2Visible,
  div3Visible,
  selectedClient,
  setSelectedClient, // ← Función para actualizar el estado en el padre.
  Bandera,
  isMirrored,
  imageMode,
  height, // Valor fallback en px para PERSO, si no se ingresan medidas
  widthCm,
  setWidthCm,
  heightCm,
  setHeightCm,
  handleChangeColor,
  handleMouseEnter,
  handleMouseLeave,
  mostrarDiv,
  fileInputRef,
  onFileChange,
  onFileRemove,
  handleClickForm,
  warningMessage,
  setPrice
}) {
  // Estados locales para las medidas personalizadas (en cm)

  // Estado para el tamaño seleccionado; si no se envía, se asume "S" por defecto.
  const [localClient, setLocalClient] = useState(selectedClient || "");
  // Estado para el botón activo (resaltado)
  const [activeButton, setActiveButton] = useState(selectedClient || "");

  // Factor de conversión de centímetros a píxeles (basado en tus valores predefinidos)
  const cmToPx = 5.56;

  // Tamaños estándar preestablecidos para Pro
  const standardSizes = [
    { label: "SP", size: "S", dimensions: "25x25CM" ,labelr:"S"},
    { label: "MP", size: "PRO", dimensions: "50x40CM" ,labelr:"M"},
    { label: "LP", size: "L", dimensions: "90x40CM" ,labelr:"L"},
    { label: "XLP", size: "XL", dimensions: "120x60CM" ,labelr:"XL" },
  ];

  // Función para actualizar medidas estándar y el tamaño seleccionado.
  const selectStandardSize = (size, dimensions) => {
    const parts = dimensions.split("x");
    if (parts.length === 2) {
      const newWidth = parseInt(parts[0].replace(/\D/g, ""), 10);
      const newHeight = parseInt(parts[1].replace(/\D/g, ""), 10);
      setWidthCm(newWidth.toString());
      setHeightCm(newHeight.toString());
      setLocalClient(size);
      if (setSelectedClient) setSelectedClient(size);
      setActiveButton(size); // Se marca el botón estándar como activo
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
  // Si localClient es "none", se toma "S" por defecto.
  const clientKey =
    localClient && localClient !== "none" ? localClient.toUpperCase() : "S";

  // Configuración centralizada para cada medida de Pro
  const isMobile = window.innerWidth <= 768;
const mobileFactor = isMobile ? 0.5 : 1;

const config = {
  S: {
    containerId: "pro-image-s",
    containerStyle: { 
      height: `${139 * mobileFactor}px`, 
      width: `${139 * mobileFactor}px` 
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  PRO: {
    containerId: "pro-image-pro",
    containerStyle: { 
      height: `${222.4 * mobileFactor}px`, 
      width: `${278 * mobileFactor}px` 
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  L: {
    containerId: "pro-image-l",
    containerStyle: { 
      height: `${222 * mobileFactor}px`, 
      width: `${500 * mobileFactor}px` 
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  XL: {
    containerId: "pro-image-xl",
    containerStyle: { 
      height: `${333.6 * mobileFactor}px`, 
      width: `${667.2 * mobileFactor}px` 
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  },
  PERSO: {
    containerId: null,
    containerStyle: {
      height: `${(heightCm ? parseInt(heightCm, 10) : heightCm) * cmToPx * mobileFactor}px`,
      width: `${(widthCm ? parseInt(widthCm, 10) : widthCm) * cmToPx * mobileFactor}px`
    },
    containerClass: "contenedor-imagen",
    imageId: selectedColor,
    objectPosition: `${Justify} ${Align}`
  }
};

  // Si se ha seleccionado el modo PERSO, se usa la configuración personalizada.
  const currentConfig =
    localClient === "PERSO" ? config.PERSO : config[clientKey] || config["S"];

  const imageStyle = {
    objectPosition: currentConfig.objectPosition,
    transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
    objectFit: imageMode,
    backgroundColor: selectedColor,
  };

  return (
    <>
      {/* Llamada a Settings */}
      <Settings
        preciospro={preciospro}
        precios={precios}
        widthCm={widthCm}
        handleWidthChange={onWidthChange}
        div1Visible={div1Visible}
        div2Visible={div2Visible}
        heightCm={heightCm}
        div3Visible={div3Visible}
        selectedClient={localClient} // Tamaño actualizado
        Bandera={Bandera}
        isMirrored={isMirrored}
        imageMode={imageMode}
        
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
  
      {/* Contenedor principal – Usamos la misma clase que Clasic */}
      <div className="selector_size-class">
        {/* Panel central: Visualización de la imagen y controles inferiores */}
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
                  alt="Imagen Pro"
                />
              </div>
            </div>
          ) : (
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
                  <img src={UploadLogo} alt="upload-logo" />
                </div>
              </label>
            </div>
          )}
  
          {/* Controles inferiores: rotar y quitar imagen */}
          <div className="center-down">
            <button 
              className="btn-remove-file" 
              title="Rotar"
              onClick={rotarImagen}
            >
              <img src={girar} alt="rotar" />
            </button>
            <button 
              className="btn-remove-file" 
              title="Quitar imagen"
              onClick={onFileRemove}
            >
              <img src={cruz} alt="quitar imagen" />
            </button>
          </div>
        </div>
  
        {/* Panel derecho: Sección de precio, separador y opciones de medidas */}
        <div className="right-pannel">
        <div className="price-section">
  {widthCm && heightCm && (
    <Calculadora
      width={parseInt(widthCm, 10)}
      height={parseInt(heightCm, 10)}
      mode={mode}
      setPrice={setPrice}
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
            
            <div className="pannel-btn-doble">
              {standardSizes.map(({ label, size, dimensions ,labelr}) => (
                <div className="button-cont" key={size}>
                  <button
                    className={`btn-big ${activeButton === size ? "active" : ""}`}
                    onClick={() => selectStandardSize(size, dimensions)}
                  >
                    {labelr}
                    <label className="btn-text">{dimensions}</label>
                    <label className="btn-text">cm</label>
                  </button>
                </div>
              ))}
            </div>
            <h4 className="pannel-title">PERSONALIZAR</h4>
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
                    if (parseInt(e.target.value, 10) > 120)
                      e.target.value = "120";
                  }}
                  maxLength={3}
                />
                <span className="static-text">cm</span>
              </div>
              <h5 className="cross">X</h5>
              <div className="input-perso-container">
                <span className="static-text">ANCHO</span>
                <input
                  className="perso-input"
                  type="text"
                  value={heightCm}
                  onChange={onHeightChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    if (parseInt(e.target.value, 10) > 60)
                      e.target.value = "60";
                  }}
                  maxLength={3}
                />
                <span className="static-text">cm</span>
              </div>
              <button
                className={`btn-big-apply ${activeButton === "PERSO" ? "active" : ""}`}
                onClick={() => {
                  // Forzamos que la medida personalizada mínima sea 25x25 cm.
                  const minMeasure = 25;
                  let newWidth = parseInt(widthCm, 10);
                  let newHeight = parseInt(heightCm, 10);
                  if (newWidth < minMeasure) newWidth = minMeasure;
                  if (newHeight < minMeasure) newHeight = minMeasure;
                  setWidthCm(newWidth.toString());
                  setHeightCm(newHeight.toString());
                  setLocalClient("PERSO");
                  if (setSelectedClient) setSelectedClient("PERSO");
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

export default Pro;
