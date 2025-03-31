import React, { useState } from 'react';
import Calculadora from './Calculadora'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Calculador = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [mode, setMode] = useState("Clasic");
  const [error, setError] = useState('');
  const [widthInput, setWidthInput] = useState("");
const [heightInput, setHeightInput] = useState("");
  
  const handleWidthChange = (e) => {
    setWidthInput(e.target.value);
  };
  
  const handleWidthBlur = () => {
    let val = parseInt(widthInput, 10);
    if (isNaN(val)) return; // o setear a un valor por defecto
    const { min, max } = inputLimits[mode].largo;
    if (val < min) val = min;
    if (val > max) val = max;
    setWidth(val); // actualizar el valor numérico si es necesario
    setWidthInput(val.toString()); // actualizar el valor visible en el input
  };
  
  const handleHeightChange = (e) => {
    setHeightInput(e.target.value);
  };
  
  const handleHeightBlur = () => {
    let val = parseInt(heightInput, 10);
    if (isNaN(val)) return;
    const { min, max } = inputLimits[mode].ancho;
    if (val < min) val = min;
    if (val > max) val = max;
    setHeight(val);
    setHeightInput(val.toString());
  };

  const inputLimits = {
    Clasic: {
      largo: { min: 25, max: 140 },
      ancho: { min: 25, max: 100 }
    },
    Pro: {
      largo: { min: 25, max: 120 },
      ancho: { min: 25, max: 60 }
    },
    Alfombra: {
      largo: { min: 40, max: 140 },
      ancho: { min: 40, max: 100 }
    }
  };
  // Determina la medida mínima según el modo seleccionado.
  const getMinimum = (selectedMode) => {
    if (selectedMode === 'Alfombra') return 40;
    if (selectedMode === 'Clasic' || selectedMode === 'Pro') return 25;
    return 0;
  };
  const [showCalculadora, setShowCalculadora] = useState(false);

  // Función para manejar el click del botón
  const handleCalcular = () => {
    setShowCalculadora(true);
  };  
  

  // Manejador para la selección del modo mediante los botones.
  const handleModeSelection = (selectedMode) => {
    setWidth('')
    setHeight('')
    setHeightInput('')
    setWidthInput('')
    setMode(selectedMode);
    const min = getMinimum(selectedMode);
    const numericWidth = Number(width);
    const numericHeight = Number(height);

    if (numericWidth < min || numericHeight < min) {
      setError(`Para el modo ${selectedMode}, la medida mínima es ${min}x${min} cm.`);
    } else {
      setError('');
    }
  };

  return (
    <div className="product-selector">
    <h2 className="choice-heading">Calcula el precio<br></br>
    de tu medida</h2>


    <div className='calculator-container'>
    <div className="mode-buttons" id="mode">
          
          <button
            onClick={() => handleModeSelection("Clasic")}
            className={`btn-mode ${mode === "Clasic" ? "active" : ""}`}
          >
            CLASSIC
          </button>
          <button
            onClick={() => handleModeSelection("Pro")}
            className={`btn-mode ${mode === "Pro" ? "active" : ""}`}
          >
            PRO
          </button>
          <button
            onClick={() => handleModeSelection("Alfombra")}
            className={`btn-mode ${mode === "Alfombra" ? "active" : ""}`}
          >
            ALFOMBRA
          </button>
        </div>



      <div className="perso-options" id="perso">
      <div className="input-perso-container">
  <span className="static-text">LARGO</span>
  <input
    className="perso-input"
    type="number"
    // Puedes incluir atributos min y max para mostrar el spinner del navegador:
    min={inputLimits[mode].largo.min}
    max={inputLimits[mode].largo.max}
    value={widthInput}     
    onChange={handleWidthChange}
    onBlur={handleWidthBlur}
    maxLength={3}
  />
  <span className="static-text">cm</span>
</div>

<h5 className="cross">X</h5>

<div className="input-perso-container">
  <span className="static-text">ANCHO</span>
  <input
    className="perso-input"
    type="number"
    min={inputLimits[mode].ancho.min}
    max={inputLimits[mode].ancho.max}
    value={heightInput}
    onChange={handleHeightChange}
    onBlur={handleHeightBlur}
    maxLength={3}
  />
  <span className="static-text">cm</span>
</div>
              <button
                className={`btn-big-apply`}
                onClick={handleCalcular}
              >
                COTIZAR
              </button>
<div className='Show-price'>
{showCalculadora && width && height && (
  mode != "Alfombra" ? (
    <Calculadora width={width} height={height} mode={mode} />
  ) : (
    <div style={{ marginTop: "-25px" }}>
      
      <Calculadora width={width} height={height} mode={mode} />
    </div>
  )
)}
      </div>
            </div>

            <a href='/' className="create-button" >CREAR</a>
      
      
      </div>
    </div>
  );
};

export default Calculador;
