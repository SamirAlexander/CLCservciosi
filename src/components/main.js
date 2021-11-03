import React from 'react'


const Main = () => {
  return (
    <div className="main">
      <div className="titulosPrincipales">
        <div>Nuestros Servicios</div>
      </div>
      <div className="parrilla">
        <div className="contenedor1">
          <div className="marcoTitulo"> Línea Vehículos Livianos</div>
        </div>
        <div className="contenedor2">
          <div className="marcoTitulo"> Línea Vehículos Pesados</div>
        </div>
        <div className="contenedor3">
          <div className="marcoTitulo"> Línea Maquinaria & Equipos</div>
        </div>
        <div className="contenedor4">
          <div className="marcoTitulo">Radiadores</div>
        </div>
        <div className="contenedor5">
          <div className="marcoTitulo">Aires Acondicionados</div>
        </div>
        <div className="contenedor6">
          <div className="marcoTitulo">Tapiceria Vehicular</div>
        </div>
        <div>
          <div className="titulosPrincipales">
            <div>Nuestros Clientes</div>
          </div>
          <div className="clientblock"></div>
        </div>
      </div>
    </div>
  );
}

export default Main
