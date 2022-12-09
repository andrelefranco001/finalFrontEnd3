import React, { useState } from 'react'
import ico from '../Assets/stethoscope.png'
import Favs from '../Routes/Favs'
import DoctorList from './DoctorList'
import themeicon from '../Assets/day-and-night.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

  
  return (
    // Aqui deberan agregar los liks correspondientes a las rutas definidas
 
    

    <nav id="navBar" class="navbar navbar-expand-lg ">
        <img class="d-inline-block align-top " alt="" src={ico} />

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <a class="nav-item nav-link active" href="/home">Home</a>
          <a class="nav-item nav-link" href="/contacto">Contacto</a>
          <a class="nav-item nav-link" href="/favs">Favoritos</a>
        </ul>

        
       
      </div>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <a><img class="img-fluid rounded" src={themeicon} alt="ligth/dark" /></a> */}

    </nav>

      
  )
}


export default Navbar