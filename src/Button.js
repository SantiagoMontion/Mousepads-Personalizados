import React, { useState } from "react";
import "./MousepadContainer.css";
const Button = (props) => {
  // Usamos el estado "color" y la función "setColor" para mantener el color actual

  const handleClick = () => {
    // Cambiamos el color del botón al hacer clic

    props.onClickHandler(props.value);
  };

  return (
    <button className="btn" onClick={handleClick}>
      <img src={props.img}></img>
    </button>
  );
};
export default Button;
