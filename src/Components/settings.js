import Button from "./Button.js";
import icon_up from "../img/icon _arrow up.svg";
import icon_left from "../img/icon _arrow left.svg";
import icon_right from "../img/icon _arrow right.svg";
import icon_down from "../img/icon _arrow down.svg";
import React, { useState } from "react";
import rellenar from "../img/rellenar.svg";
import ajustar from "../img/cubrir.svg";
import contain from "../img/contain.svg";
import estirar from "../img/estirar.svg";
import white from "../img/white.svg"
import black from "../img/black.svg"
import ia from "../img/ia.svg"
import icon_rotation from "../img/espejo.svg";
import icon_center from "../img/center.svg";



function Settings ({selectedColor,handleAlign,handlejustify,handleSelectChange,handleButtonClick,toggleImageMode,rotarImagen,handleRotation, div1Visible, div2Visible, div3Visible ,selectedClient,isMirrored,imageMode,height,width,handleChangeColor,handleMouseEnter, handleMouseLeave, mostrarDiv
}) {
  const [showBackgroundColors, setShowBackgroundColors] = useState(false);
  const [mostrarDiv2, setMostrarDiv2] = useState(false);


   return (
    
    <div className="selector_size">
      
            <div className="big-pannel">
              <div className="option-pannels">
                <div className="left-pannel">
                 
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">AJUSTES</h5>
                    <div className="left-pannel-adjust" id="left-pannel-adjust">
  <div className="button-adjust">
    <div className="btn-container">
      <Button
        img={ajustar}
        value="cover"
        onClickHandler={toggleImageMode}
      />
      <div className="price-tooltip-btn">
      Expandir imagen
      </div>
    </div>
  </div>

  <div className="button-adjust">
    <div className="btn-container">
      <Button
        img={rellenar}
        value="contain"
        onClickHandler={toggleImageMode}
      />
      <div className="price-tooltip-btn">
      Rellenar
      </div>
    </div>
  </div>

  <div className="button-adjust">
    <div className="btn-container">
      <Button
        img={estirar}
        value="fill"
        onClickHandler={toggleImageMode}
      />
      <div className="price-tooltip-btn">
      Imagen completa
      </div>
    </div>
  </div>

  <div className="button-adjust">
    <div className="btn-container">
      <Button
        img={icon_rotation}
        className="btn"
        onClickHandler={handleRotation}
        value=""
      />
      <div className="price-tooltip-btn">
      Voltear horizontal
      </div>
    </div>
  </div>
</div>
                  </div>
                  <div className="left-pannel-container-1">
                    <h5 className="left-pannel-title">ALINEAR</h5>
                    <div className="left-pannel-adjust" id="left-pannel-adjust2">
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
              </div>
              
              
              
              {imageMode === "contain" && (
                <>
                <div className="contain-div">
                  
       <div className="background-colors-container">
       {/* Botón principal siempre visible con toggle de clase active */}
       <button
         className={`toggle-background-btn ${showBackgroundColors ? "active" : ""}`}
         onClick={() => setShowBackgroundColors(!showBackgroundColors)}
       >
         <img src={contain} alt="Mostrar opciones" />
       </button>
          
          {/* Menú desplegable que aparece debajo del botón */}
          {showBackgroundColors && (
            <div className="background-colors">
            {/* Opción para Negro */}
            <label className="radio-label">
              <input
                type="radio"
                value="black"
                checked={selectedColor === "black"}
                onChange={handleChangeColor}
              />
              <div className="radio-content">
               
              
                {/* Imagen representativa, reemplaza la ruta por la que necesites */}
                <img className="radio-img" src={black} alt="Negro" />
                <span className="radio-text">Negro</span>
              </div>
            </label>
          
            {/* Opción para Blanco */}
            <label className="radio-label">
              <input
                type="radio"
                value="white"
                checked={selectedColor === "white"}
                onChange={handleChangeColor}
              />
              <div className="radio-content">
                
                
                <img className="radio-img" src={white} alt="Blanco" />
                <span className="radio-text">Blanco</span>
              </div>
            </label>
          
            {/* Opción para IA */}
            <label
        className="radio-label"
        onMouseEnter={() => setMostrarDiv2(true)}
        onMouseLeave={() => setMostrarDiv2(false)}
      >
        <input
          type="radio"
          value="ia"
          checked={selectedColor === "ia"}
          onChange={handleChangeColor}
        />
        <div className="radio-content">
          <img className="radio-img" src={ia} alt="IA" />
          <span className="radio-text">IA</span>
          <button type="button" className="ia-info-btn">
            {/* Puedes dejarlo vacío o agregar contenido si lo requieres */}
          </button>
        </div>
        {mostrarDiv2 && (
          <div className="ia-text">
            El fondo se completa con IA, el resultado se<br />
            muestra vía mail.
          </div>
        )}
      </label>
          </div>
          )}
        </div>
        </div></>
      )}
      
            </div>
            
            

           
          </div>
        )
    };


    export default Settings;