import React from "react";
import "styles/styles.css";
import logo from "media/LogoCLC.png";



const Header = () => {
  return (
    <div className="header">
      <div className="parrillaHeader">
        <div className="blockheader">
          <img src={logo} width="200px" alt=" " />
        </div>
        <div className="title" >
          Soluciones Integrales para Maquinaria, Equipos & vehículos
        </div>
        {/* <div>Bloque por definir</div> */}

        <div></div>
      </div>
    </div>
  );
};

export default Header;
