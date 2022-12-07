import React from 'react'
import logo from '../Assets/DH.png'
import icoFacebook from '../Assets/ico-facebook.png'


const Footer = () => {
  return (
    <footer className='display flex'>
    <div>
      <p>Powered by 
      <img class="img-fluid" alt="" src={logo} width="350px" height="250"/>      
      </p>       
    </div>
    <div>
    <img class="img-fluid" alt="" src={icoFacebook} width="150px" height="250"/>

    </div>
        
    </footer>
  )
}

export default Footer
