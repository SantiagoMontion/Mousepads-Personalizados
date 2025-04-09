import React from "react";
import "../css/Home.css";
import Logo2 from '../img/Logo2.svg';
import trap from '../img/trap.svg';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
      
          <a href='https://mgmgamers.store/'><img src={Logo2} alt="Logo" /></a>
        
        </div>
      <div className="home-second">
        <p className="home-p">Vendemos productos gamers<br></br>
        para los gordos compus</p>
        <a href='https://mgmgamers.store/'  className="home-btn">Tienda online</a>
        <a href='/'  className="home-btn">Personalizar mousepad</a>
        <a href='/'  className="home-btn">Personalizar alfombra</a>
        <a href='/informacion'  className="home-btn">Más información de los productos</a>
        <p className="trap">🪤</p>
        <p className="p-footer-home">© 2025 MGM Gamers.<br></br> Todos los derechos reservados.</p>
      </div>
      
    </div>
  );
};

export default Home;
