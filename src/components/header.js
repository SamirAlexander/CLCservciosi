import React from "react";
import "styles/styles.css";
import logo from "media/LogoCLC.png";



const Header = () => {
  return (
    <div className="header">
      <img src={logo} width="200px" />
      <div className="title">
        Soluciones Integrales para Maquinaria, Equipos & vehículos
      </div>
    </div>
  );
};

export default Header;
