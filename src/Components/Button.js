import React, { useState } from "react";
import "../css/MousepadContainer.css";
const Button = (props) => {
  const handleClick = () => {
    props.onClickHandler(props.value);
  };

  return (
    <button className="btn" onClick={handleClick}>
      <img src={props.img}></img>
    </button>
  );
};
export default Button;
