import React from 'react'


const Main = () => {
  return (
    <div className="main">
      <div className="titulosPrincipales">
        <div>Nuestros Servicios</div>
      </div>
      <div className="parrilla">
        <div className="contenedor1">
          <div className="marcoTitulo"> Latotonería Automotriz</div>
        </div>
        <div className="contenedor2">
          <div className="marcoTitulo"> Latonería Pesada</div>
        </div>
        <div className="contenedor3">
          <div className="marcoTitulo"> Pintura de Maquinaria</div>
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
          <div className="clientblock">
          <div class="parrillaClientes" >
            <div className="blockClient1"></div>
            <div className="blockClient2"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
