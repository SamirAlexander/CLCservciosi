import React from 'react'
import logo from "media/LogoCLC.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBlock">
        CONTACTANOS:
        <div>(+57) 3045932421</div>
        <div className="footertext">Campestre Mz 1 Lote 17 Frente a Proleca</div>
        <div className="footertext">Kilometro 1 Mamonal</div>
        <div className="picFooter"><img src={logo} width="200px" alt=" "></img></div>
      </div>
      <div className="footerBlock">
        Horario de Atención
        <div className="footertext">Lunes a Sabado:</div>
        <div className="footertext">7:00 AM a 5:00 PM</div>
        <div className="footertext">Domingos:</div>
        <div className="footertext">Según Programación</div>
      </div>
      <div className="footerBlock">Enviar Mensaje RedesSociales</div>
    </div>
  );
}

export default Footer