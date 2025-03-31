import React from 'react';
import '../css/info.css';
import Calculador from "../Components/Calculador"

const Info = () => {
  return (
    <div className="product-selector">
      <div className='editor-text'>
      <h1 className="product-title">Mini Editor de MGM</h1>
      <p className="product-subtitle">Preview de tu modelo</p>
      <p className="product-text">
        Medí tu escritorio,<br></br> elegí un diseño,<br></br> y mira cómo queda:
      </p>

      <a href='/' className="create-button" >CREAR</a>
      </div>
      <h2 className="choice-heading">¿Cuál es para mí?</h2>

      <div className="product-cards">
      
        <div className="product-card">
          <h3 className="card-title">Mousepad Classic</h3>
          <p className="card-tag">híbrido</p>
          <p className="card-description">Soldado de batalla</p>
          <ul className="card-features">
            <li>Superficie optimizada</li>
            <li>Goma antideslizante</li>
            <li>Border cosidos</li>
            <li>Diseño personalizado</li>
            <li>Medida personalizada</li>
              <ul className="card-measures">
                <li>medida mínima<br></br> 25x25cm</li>
                <li>medida máxima<br></br> 140x100cm</li>
              </ul>
            
          </ul>
          <a href='/' className="select-button">QUIERO ESTE</a>
        </div>

        <div className="product-card">
        <div className="top-right-label">más elegido</div>
          <h3 className="card-title">Mousepad Pro</h3>
          <p className="card-tag">speed</p>
          <p className="card-description">Con este carreras sí o sí</p>
          <ul className="card-features">
            <li>Superficie ultralisa</li>
            <li>100% caucho natural</li>
            <li>Border cosidos</li>
            <li>Diseño personalizado</li>
            <li>Medida personalizada</li>
              <ul className="card-measures">
                <li>medida mínima<br></br> 25x25cm</li>
                <li>medida máxima<br></br> 120x60cm</li>
              </ul>
            
          </ul>
          <a href='/' className="select-button">QUIERO ESTE</a>
        </div>

        <div className="product-card">
        <div className="top-right-label">Nuevo</div>
          <h3 className="card-title">Alfombras</h3>
          <p className="card-tag">double</p>
          <p className="card-description">Ponete creativo</p>
          <ul className="card-features">
            <li>Textura extra suave</li>
            <li>Alfombra reversible</li>
            <li>Border cosidos</li>
            <li>Diseño personalizado</li>
            <li>Medida personalizada</li>
              <ul className="card-measures">
                <li>medida mínima<br></br> 40x40cm</li>
                <li>medida máxima<br></br> 140x100cm</li>
              </ul>
            
          </ul>
          <a href='/' className="select-button">QUIERO ESTE</a>
        </div>
      </div>
      <Calculador></Calculador>
    </div>
  );
};

export default Info;