import React from 'react'
import logo from "media/LogoCLC.png";

const Header2 = () => {
    return (
        <div className="header2">
            <img className="logoheader" src={logo} width="200px" alt=" " />
            <div className="nombreEmpresa">CLC Servicios</div>
            <div className="nombreEmpresa2">Especialistas en la Imagen de su Vehículo</div>
        </div>
    )
}

export default Header2
