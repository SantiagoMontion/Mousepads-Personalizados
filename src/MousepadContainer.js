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
import arrow2 from "./Arrow_2.svg";
import arrow from "./Arrow.svg";
import Logo from "./Logo.svg";

function MousepadContainer() {
  const [selectedClient, setSelectedClient] = useState("none"); //default value
  const [Bandera, setBandera] = useState("");
  const [file, setFile] = useState();
  const [Align, setAlign] = useState("center");
  const [Justify, setJustify] = useState("center");
  const [isMirrored, setIsMirrored] = useState(false);
  const [imageMode, setImageMode] = useState("cover");
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [nombreModelo, setNombreModelo] = useState("");
  const [comentario, setComentario] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleNombreModeloChange = (event) => {
    setNombreModelo(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };
  const toggleImageMode = () => {
    setImageMode((prevMode) =>
      prevMode === "fill" ? "cover" : prevMode === "cover" ? "contain" : "fill"
    );
  };

  const translateString = (inputString) => {
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
        return "rellenar (Imágen completa)";
      case "cover":
        return "Cubrir (Recortando)";

      case "contain":
        return "Contenido";

      case "false":
        return "No";
      case "true":
        return "Si";
      case "":
        return "-";
      case "PERSO":
        return `${widthCm}cm x ${heightCm}cm`;

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
        <h3 className="help">Porfavor carga tu imagen</h3>
        <img className="arrow" src={arrow}></img>
        <img className="arrow-2" src={arrow2}></img>
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
              {selectedClient === "S" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      id="scalable-image"
                      style={{ height: "138px", width: "138px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
                        }}
                        src={file}
                      />
                    </div>
                  )}
                </>
              )}
              {selectedClient === "M" && (
                <>
                  {WarningBanner(Bandera)}
                  {Bandera === "true" && (
                    <div
                      className="contenedor-imagen"
                      id="scalable-image-m"
                      style={{ height: "177px", width: "455px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
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
                      <div className="alert-div">
                        <h3 className="help">Ahora elegí una medida</h3>
                        <img className="arrow-rotate" src={arrow}></img>
                        <img className="arrow-2" src={arrow2}></img>
                      </div>
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
                      id="scalable-image-l"
                      style={{ height: "222px", width: "500px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
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
                      id="scalable-image-xl"
                      style={{ height: "333px", width: "555px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
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
                      id="scalable-image-xxPrimerol"
                      style={{ height: "389px", width: "611px" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
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
                      style={{ height: "34.68em", width: "52.06em" }}
                    >
                      <img
                        className="complete-img"
                        style={{
                          objectPosition: `${Justify} ${Align}`,
                          transform: isMirrored ? "scaleX(-1)" : "scaleX(1)",
                          objectFit: imageMode,
                          backgroundColor: `${selectedColor} `,
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
                          backgroundColor: `${selectedColor} `,
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
                value="left"
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
                value="right"
              ></Button>
              <Button
                img={icon_down}
                className="btn"
                onClickHandler={handleAlign}
                value="bottom"
              ></Button>
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
            </div>
          )}
        </div>
        <div className="right-pannel">
          <div className="only-size">
            <h3 className="pannel-title">
              Elegí la medida <br></br>perfecta para vos.
            </h3>
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
                XXXL (150x100CM)
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
              Personalizada
            </button>
            {mostrarDiv && (
              <div className="perso-options">
                <div>
                  <input
                    className="perso-input"
                    type="number"
                    value={widthCm}
                    pattern="[0-9]*"
                    onChange={handleWidthChange}
                    placeholder="Colocar Largo (cm)"
                  />
                </div>
                <h5 className="cross">X</h5>

                <div>
                  <input
                    className="perso-input"
                    type="number"
                    pattern="[0-9]*"
                    value={heightCm}
                    onChange={handleHeightChange}
                    placeholder="Colocar Ancho (cm)"
                  />
                </div>
              </div>
            )}
          </div>

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
                Subir imagen
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="container-mail">
        <div class="left-column-mail">
          <img className="mgm-logo-mail" src={Logo}></img>
          <h2 className="title-mail">
            ¿Te gustó cómo quedo?<br></br>
            ¿Qué esperas para pedirlo?
          </h2>
          <form>
            <div className="input-container-mail">
              <label>Ponele nombre a tu diseño.</label>
              <input
                className="input-mail"
                type="text"
                value={nombreModelo}
                onChange={handleNombreModeloChange}
              />
            </div>

            <div className="input-container-mail">
              <label className="label-2">
                ¿Queres que le agreguemos algo al diseño? (Opcional)
              </label>
              <input
                type="text"
                className="input-mail-big"
                value={comentario}
                onChange={handleComentarioChange}
              />
              <EmailLink
                emailAddress={"mgmpads@gmail.com"}
                subject={`Mousepad Personalizado Medida: ${translateString(
                  selectedClient
                )}`}
                body={`Buenas! Gracias por llegar hasta acá 🙌 
Estás a un solo paso de tener el mousepad que te mereces 🤩
            
👉 Necesitamos que adjuntes tu imagen, por favor que esté en la mejor calidad posible. 
Este paso es obligatorio. Hay dos formas de hacerlo:
          
1. Podes hacerlo adjuntando como archivo tu imagen a este mismo mail desde la barra inferior 📎
2. Copia y pega el link de donde descargaste la imagen:
-
          
          
Esta es la configuración que elegiste para tu modelo ⚙️🔩:
Medida: ${translateString(selectedClient)}
Nombre del Modelo: ${translateString(nombreModelo)}
Comentario extra para el armado: ${translateString(comentario)}
Alineación: ${translateString(Align)}
Justificación: ${translateString(Justify)}
¿Modo espejo?: ${translateString(isMirrored)}
Ajuste de la imagen: ${translateString(imageMode)}

Revisa si está correcto y envía.

⛔En caso de que esto sea una PRUEBA por favor NO ENVIAR⛔.

Una vez enviado tu modelo, nuestro diseñador comenzará a armar y guardar el modelo en nuestros archivos,
luego te contactaremos a este mismo email para enviarte el Link de tu modelo en nuestra tienda, para que desde ahí realices tu compra😎.
El plazo para responder puede ser de hasta 48 hs hábiles.`}
              />
            </div>
          </form>
          <h3 className="subtitle-mail">
            *Apenas nos envíes el formulario, <br></br>el diseñador se va a
            comunicar con vos <br></br>via mail. La respuesta puede tener una{" "}
            <br></br>demora de hasta 48hs hábiles.
          </h3>
        </div>
        <div class="right-column-mail">
          <div class="faq">
            <h3 className="title-faq">Preguntas Frecuentes</h3>
            <ul>
              <li className="faq-title">
                ¿Personalizar el diseño tiene un costo extra?
              </li>
              <p className="faq-text">
                Podes poner el diseño que vos quieras sin costo extra!<br></br>
                El precio depende solo de la medida.
              </p>
              <li className="faq-title">
                ¿Puedo elegir un diseño de la web y cambiarle la medida?
              </li>
              <p className="faq-text">
                Si! Tenes que poner el link del diseño que quieras de nuestra
                web<br></br>y especificar la medida mediante este formulario.
              </p>
              <li className="faq-title">
                ¿Qué pasa si quiere una modificación especial en el diseño?
              </li>
              <p className="faq-text">
                Hace todo igualmente, el diseñador se va a comunicar<br></br>{" "}
                personalmente con vos por mail para<br></br> poder hacer el
                cambio que quieras.
              </p>
              <li className="faq-title">
                ¿Puedo pedir que me hagan un diseño?
              </li>
              <p className="faq-text">
                No hacemos diseños desde cero. Solo acomodamos la imagen que vos
                buscaste a la medida que elegiste.
              </p>
              <li className="faq-title">
                ¿Cuáles son las medidas mínimas y máximas?
              </li>
              <p className="faq-text">
                Nuestra medida mínima es de 25cm x 25cm y la máxima es de 15Ocm
                x 100cm.
              </p>
              <li className="faq-title">¿Hacen envíos?</li>
              <p className="faq-text">
                Si, hacemos envíos a TODA la Argentina. Podes ver los costos de
                envíos en la web con tu codigo postal. Si sos de otro país,
                háblanos para cotizar.
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default MousepadContainer;
