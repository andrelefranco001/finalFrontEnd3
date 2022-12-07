import React from 'react'
import ico from '../Assets/DH.ico'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    // Aqui deberan agregar los liks correspondientes a las rutas definidas

    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
        <img class="d-inline-block align-top " alt="" src={ico} width="40px" height="40"/>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <a class="nav-item nav-link active" href="/home">Home</a>
          <a class="nav-item nav-link" href="/contacto">Contacto</a>
          <a class="nav-item nav-link" href="/favs">Favoritos</a>
        </ul>
      </div>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>

    </nav>

      
  )
}


export default Navbar