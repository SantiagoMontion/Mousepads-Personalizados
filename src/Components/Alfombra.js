import React, { useState } from "react";
import Settings from "./settings.js";
import Calculadora from "./Calculadora.js";
import Upload from '../img/upload.svg';
import UploadLogo from '../img/upload-logo.svg';
import cruz from "../img/cruz.svg"
import girar from "../img/girar.svg"
import circle from "../img/circle.svg"
import square from "../img/square.svg"

function Alfombra({
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
  div1Visible,
  div2Visible,
  div3Visible,
  selectedClient,
  setSelectedClient, // Setter proveniente del padre
  isMirrored,
  imageMode,
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
  toggleCircular,
  isCircular,
  setPrice
  
}) {
  // Estados locales para las medidas personalizadas (en cm)
  // Se interpretarán: widthCm = Ancho, heightCm = Largo

  const [activeButton, setActiveButton] = useState(selectedClient || "");
  // Estado para el tamaño seleccionado (local); se inicializa con el valor recibido o "S" por defecto.
  const [localClient, setLocalClient] = useState(selectedClient || "");
  const cmToPx = 5.56;
  const clientKey =
  localClient && localClient !== "none" && localClient !== "PERSO"
    ? localClient.toUpperCase()
    : "MA";

// Utilizamos una clave fallback que exista en el objeto config, por ejemplo, "SA" (o la que prefieras)
  const isMobile = window.innerWidth <= 768;
  const mobileFactor = isMobile ? 0.5 : 1;
  const standardSizes = [
    { label: "SA", size: "S-A", dimensions: "50x40CM", labelr: "S" },
    { label: "MA", size: "M-A", dimensions: "70x50CM" , labelr: "M"},
    { label: "LA", size: "L-A", dimensions: "90x60CM" , labelr: "L"},
    { label: "XLA", size: "XL-A", dimensions: "100x70CM" , labelr: "XL"},
    { label: "XXLA", size: "XXL-A", dimensions: "140x100CM", labelr: "XXL" },
  ];

 
  const config = {
    "SA": {
      containerId: "alfombra-image",
      containerStyle: {
        width: `${50 * cmToPx * mobileFactor}px`,   // 50 cm (Ancho)
        height: `${40 * cmToPx * mobileFactor}px`,  // 40 cm (Largo)
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
    "MA": {
      containerId: "alfombra-image-m",
      containerStyle: {
        width: `${70 * cmToPx * mobileFactor}px`,
        height: `${50 * cmToPx * mobileFactor}px`,
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
    "LA": {
      containerId: "alfombra-image-l",
      containerStyle: {
        width: `${90 * cmToPx * mobileFactor}px`,
        height: `${60 * cmToPx * mobileFactor}px`,
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
    "XLA": {
      containerId: "alfombra-image-xl",
      containerStyle: {
        width: `${100 * cmToPx * mobileFactor}px`,
        height: `${70 * cmToPx * mobileFactor}px`,
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
    
    "XXLA": {
      containerId: "alfombra-image-xxxl",
      containerStyle: {
        width: `${140 * cmToPx * mobileFactor}px`,
        height: `${100 * cmToPx * mobileFactor}px`,
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
    PERSO: {
      containerId: null,
      containerStyle: {
        width: `${(widthCm ? parseInt(widthCm, 10) : widthCm) * cmToPx * mobileFactor}px`,
        height: `${(heightCm ? parseInt(heightCm, 10) : heightCm) * cmToPx * mobileFactor}px`,
      },
      containerClass: "contenedor-imagen",
      imageId: selectedColor,
      objectPosition: `${Justify} ${Align}`,
    },
  };
  // Tamaños estándar preestablecidos para alfombras
  // En las dimensiones: el primer número es Ancho y el segundo, Largo.
  
  const currentConfig = localClient === "PERSO" ? config.PERSO : config[clientKey] || config["SA"];
  
  
  // Función para actualizar medidas estándar y el tamaño seleccionado.
  // Separa el string en dos partes (ancho y largo) y las asigna a las variables correspondientes.
  const selectStandardSize = (size, dimensions) => {
    const parts = dimensions.split("x");
    if (parts.length === 2) {
      // El primer número es el ancho y el segundo es el largo.
      const newWidth = parseInt(parts[0].replace(/\D/g, ""), 10);
      const newHeight = parseInt(parts[1].replace(/\D/g, ""), 10);
      setWidthCm(newWidth.toString());
      setHeightCm(newHeight.toString());
      setLocalClient(size); // actualiza el tamaño seleccionado (por ejemplo, "S")
      if (setSelectedClient) setSelectedClient(size);
      setActiveButton(size); // Marca el botón estándar seleccionado como activo.
    }
  };

  // Funciones para los inputs personalizados
  const onWidthChange = (e) => {
    setWidthCm(e.target.value);
  };

  const onHeightChange = (e) => {
    setHeightCm(e.target.value);
  };

  // Si localClient es "PERSO" se toman las medidas personalizadas;
  // de lo contrario, se busca el preset correspondiente.  
  // Aquí se monta la clave del preset agregando el sufijo "-A"
 

  // Configuración de estilos para cada tamaño estándar y el modo personalizado ("PERSO")




  // Si el modo es "PERSO" se toma la configuración personalizada;
  // en otro caso se busca la configuración del preset seleccionado.
  
  const imageStyle = {
    objectPosition: currentConfig.objectPosition,
    transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
    objectFit: imageMode,
    backgroundColor: selectedColor,
  };

  let modifiedContainerStyle;
  if (isCircular) {
    // Convertir las dimensiones definidas (string con "px") a números.
    const originalWidth = parseFloat(currentConfig.containerStyle.width);
    const originalHeight = parseFloat(currentConfig.containerStyle.height);
    // Elegir el mínimo para que el contenedor sea cuadrado.
    const squareDimension = Math.min(originalWidth, originalHeight) + "px";
    modifiedContainerStyle = {
      ...currentConfig.containerStyle,
      width: squareDimension,
      height: squareDimension,
      borderRadius: "50%",
      overflow: "hidden", // Para recortar el contenido extra.
    };
  } else {
    modifiedContainerStyle = {
      ...currentConfig.containerStyle,
      borderRadius: "0%"
    };
  }



  return (
    <>
      {/* Componente Settings */}
      <Settings
        widthCm={widthCm}
        handleWidthChange={onWidthChange}
        div1Visible={div1Visible}
        div2Visible={div2Visible}
        heightCm={heightCm}
        div3Visible={div3Visible}
        selectedClient={localClient} // Se pasa el tamaño actualizado
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
  
      {/* Contenedor principal: se renombró la clase para que coincida con la estructura de Clasic */}
      <div className="selector_size-class">
        {/* Panel central: Visualización de la imagen */}
        <div className="center-pannel">
          {file ? (
            <div className="img-container">
           <div
  className={`${currentConfig.containerClass} ${isCircular ? "circular" : ""}`}
  id={currentConfig.containerId}
  style={modifiedContainerStyle}
>
              <img
                className="complete-img"
                id={currentConfig.imageId}
                style={imageStyle}
                src={file}
                alt="Imagen de alfombra"
              />
            </div>
          </div>
          ) : (
            // Si no hay archivo, se muestra el bloque de carga de imagen tal como en Clasic
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
  
          {/* Controles inferiores (rotar y quitar) */}
          <div className="center-down">
            <button 
              className="btn-remove-file" 
              title="Rotar"
              onClick={rotarImagen}
            >
              <img src={girar} alt="rotar" />
            </button>
            <div className="circular-control">
  <button
    className="btn-remove-file"
    onClick={toggleCircular}
    title="Alternar a forma circular"
  >
    
    {isCircular ? <img src={square} alt="rotar" /> : <img src={circle} alt="rotar" />}
  </button>
</div>
            <button 
              className="btn-remove-file" 
              onClick={onFileRemove}
              title="Quitar imagen"
            >
              <img src={cruz} alt="quitar" />
            </button>
          </div>
        </div>
  
        {/* Panel derecho: Medidas y opciones */}
        <div className="right-pannel">
          {/* Sección de Precio */}
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
  
          {/* Opciones de Medidas */}
          <div className="only-size">
            <h3 className="pannel-title">MEDIDAS</h3>
           
            <div className="pannel-btn-doble">
              {standardSizes.map(({ label, size, dimensions ,labelr }) => (
                <div className="button-cont" key={size}>
                  <button
                    className={`btn-big ${activeButton === label ? "active" : ""}`}
                    onClick={() => selectStandardSize(label, dimensions)}
                  >
                    {labelr}
                    <label className="btn-text">{dimensions}</label>
                    <label className="btn-text">cm</label>
                  </button>
                </div>
              ))}
            </div>
            <h4 className="pannel-title" id="p">
              PERSONALIZAR
            </h4>
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
                    if (parseInt(e.target.value, 10) > 140)
                      e.target.value = "140";
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
                    if (parseInt(e.target.value, 10) > 100)
                      e.target.value = "100";
                  }}
                  maxLength={3}
                />
                <span className="static-text">cm</span>
              </div>
              <button
                className={`btn-big-apply ${activeButton === "PERSO" ? "active" : ""}`}
                onClick={() => {
                  // Forzamos que la medida personalizada mínima sea 40 cm
                  const minMeasure = 40;
                  let newWidth = parseInt(widthCm, 10);
                  let newHeight = parseInt(heightCm, 10);
                  if (newWidth < minMeasure) newWidth = minMeasure;
                  if (newHeight < minMeasure) newHeight = minMeasure;
                  setWidthCm(newWidth.toString());
                  setHeightCm(newHeight.toString());
                  setLocalClient("PERSO");
                  if (setSelectedClient) setSelectedClient("PERSO");
                  setActiveButton("PERSO"); // Se asigna "PERSO" como botón activo
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
  );}

export default Alfombra;