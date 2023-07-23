import React, { useState } from "react";
import "./MousepadContainer.css";
import EmailLink from "./EmailLink";
import icon_rotation from "./icon _refresh_.svg";
import icon_center from "./center.svg";
import Button from "./Button.js";
import icon_resize from "./icon _size_.svg";
import icon_up from "./icon _arrow up.svg";
import icon_left from "./icon _arrow left.svg";
import icon_right from "./icon _arrow right.svg";
import icon_down from "./icon _arrow down.svg";

function MousepadContainer() {
  const [selectedClient, setSelectedClient] = useState("none"); //default value
  const [Bandera, setBandera] = useState("");
  const [file, setFile] = useState();
  const [Align, setAlign] = useState("center");
  const [Justify, setJustify] = useState("center");
  const [isMirrored, setIsMirrored] = useState(false);
  const [imageMode, setImageMode] = useState("cover");
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const toggleImageMode = () => {
    setImageMode((prevMode) => (prevMode === "fill" ? "cover" : "fill"));
  };

  const translateString = (inputString) => {
    const stringValue = inputString.toString();
    switch (stringValue) {
      case "left":
        return "derecha";
      case "center":
        return "centrado";
      case "right":
        return "izquierda";
      case "top":
        return "arriba";
      case "bottom":
        return "abajo";
      case "fill":
        return "rellenar (Imágen completa)";
      case "cover":
        return "Cubrir (Recortando)";
      case "false":
        return "No";
      case "true":
        return "Si";

      default:
        return stringValue;
      // Si no se encuentra una traducción, devuelve la entrada original.
    }
  };

  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };

  const handleRotation = () => {
    setIsMirrored(!isMirrored);
  };

  function handleWidthChange(event) {
    const value = event.target.value;
    const newValue = value <= 150 ? value : 150;
    setWidthCm(newValue);
  }

  function handleHeightChange(event) {
    const value = event.target.value;
    setHeightCm(value <= 100 ? value : 100);
  }

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

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setBandera("true");
  }

  function handleSelectChange(string) {
    setSelectedClient(string);
  }

  function handleAlign(string) {
    setAlign(string);
  }

  function handlejustify(string) {
    setJustify(string);
  }

  function WarningBanner(props) {
    if (props === "true") {
      return null;
    }
    return (
      <div className="warning">
        <h3>Primero debes cargar una imagen</h3>
      </div>
    );
  }
  const { height, width } = convertToPixels();

  return (
    <>
      <div className="selector_size">
        <div className="big-pannel">
          <div className="option-pannels">
            <div className="left-pannel">
              <Button
                img={icon_resize}
                className="btn"
                onClickHandler={toggleImageMode}
                value=""
              ></Button>

              <Button
                img={icon_rotation}
                className="btn"
                onClickHandler={handleRotation}
                value=""
              ></Button>
            </div>
          </div>
          <div className="center-pannel">
            <div className="img-container">
              {selectedClient === "M" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: "177px", width: "455px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
              {selectedClient === "none" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="no-img"
                      style={{ height: "555px", width: "833px" }}
                    >
                      <h3>Porfavor elegi una medida</h3>
                    </div>
                  )}
                </>
              )}
              {selectedClient === "L" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: "222px", width: "500px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
              {selectedClient === "XL" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: "333px", width: "555px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
              {selectedClient === "XXL" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: "389px", width: "611px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
              {selectedClient === "XXXL" && (
                <>
                  {WarningBanner(Bandera)}

                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: "555px", width: "833px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}

              {selectedClient === "PERSO" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      style={{ height: `${height}px`, width: `${width}px` }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Align} ${Justify} `,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="under-pannels">
              <Button
                img={icon_up}
                className="btn"
                onClickHandler={handleAlign}
                value="top"
              ></Button>
              <Button
                img={icon_left}
                className="btn"
                onClickHandler={handlejustify}
                value="right"
              ></Button>

              <Button
                img={icon_center}
                className="btn"
                onClickHandler={function (event) {
                  handleAlign("center");
                  handlejustify("center");
                }}
                value="center"
              ></Button>

              <Button
                img={icon_right}
                className="btn"
                onClickHandler={handlejustify}
                value="left"
              ></Button>
              <Button
                img={icon_down}
                className="btn"
                onClickHandler={handleAlign}
                value="bottom"
              ></Button>
            </div>
          </div>
        </div>
        <div className="right-pannel">
          <div className="only-size">
            <h3 className="pannel-title">
              Elegí la medida <br></br>perfecta para vos.
            </h3>
            <div className="pannel-btn-doble">
              <button
                className="btn-big"
                onClick={() => handleSelectChange("M")}
              >
                MEDIDA S <br></br>(25x25CM)
              </button>
              <button
                className="btn-big"
                onClick={() => handleSelectChange("M")}
              >
                MEDIDA M <br></br>(82x32CM)
              </button>
              <button
                className="btn-big"
                onClick={() => handleSelectChange("L")}
              >
                MEDIDA L <br></br>(90x40CM)
              </button>
              <button
                className="btn-big"
                onClick={() => handleSelectChange("XL")}
              >
                MEDIDA XL <br></br>(100x60CM)
              </button>
              <button
                className="btn-big"
                onClick={() => handleSelectChange("XXL")}
              >
                MEDIDA XXL <br></br>(110x70CM)
              </button>
              <button
                className="btn-big"
                onClick={() => {
                  handleSelectChange("XXXL");
                }}
              >
                MEDIDA XXXL <br></br>(150x100CM)
              </button>
            </div>

            <button
              className="btn-big-space"
              onClick={function (event) {
                handleSelectChange("PERSO");
                {
                  toggleDiv();
                }
              }}
            >
              PERSONALIZADA
            </button>
          </div>
          {mostrarDiv && (
            <div className="perso-options">
              <label>
                Ancho (cm):
                <input
                  type="number"
                  value={widthCm}
                  pattern="[0-9]*"
                  onChange={handleWidthChange}
                />
              </label>

              <label>
                Alto (cm):
                <input
                  type="number"
                  pattern="[0-9]*"
                  value={heightCm}
                  onChange={handleHeightChange}
                />
              </label>
            </div>
          )}

          <div className="modelo" id="upload">
            <h3 className="pannel-title">
              Carga ahora<br></br>
              tu imagen
            </h3>
            <div className="custom-file-input">
              <input
                type="file"
                name="file"
                id="file-upload"
                className="file-input"
                onChange={handleChange}
              />
              <label htmlFor="file" className="file-label">
                SUBIR
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Enviar correo electrónico desde React</h1>

        <EmailLink
          emailAddress={"personalizados@mgmgamers.store"}
          subject={`Mousepad Personalizado Medida: ${selectedClient}`}
          body={`Hola! Estos son los pasos a seguir para pedir tu personalizado:

1- Adjunta tu imagen a este mismo mail como un archivo desde la barra inferior o carga aquí el link de tu modelo. (Siempre intenta que la imagen esté en la mejor calidad posible para un mejor resultado) (OBLIGATORIO)
Link a tu imagen:
-
          
2- ¿Tienes algún nombre en mente para tu modelo? Esto nos ayuda a diferenciarlo en la web (OPCIONAL) :
-
          
3- En caso de que quieras agregar un comentario sobre cómo quieres tu modelo o algo a tener en cuenta al momento de armarlo decinos (OPCIONAL):
-
 

Por último esta es la configuración que elegiste para tu modelo:
Alineación: ${translateString(Align)}
Justificación: ${translateString(Justify)}
¿Modo espejo?: ${translateString(isMirrored)}
Ajuste de la imagen: ${translateString(imageMode)}
Medida: ${selectedClient}
Revisa si está correcto y envía.

Una vez enviado tu modelo, nuestro diseñador comenzará a armar y guardar el modelo en nuestra base, luego te contactaremos a este mismo email para enviarte el Link de tu modelo en nuestra tienda online, para que desde ahí realices tu compra.`}
        />
      </div>
    </>
  );
}

export default MousepadContainer;
