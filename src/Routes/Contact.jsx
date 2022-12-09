import React from 'react'
import Form from '../Components/Form'
import doctorimg from '../Assets/jobs.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  
  return (
    
    <div>
    <div  id='contactText'>
      <h2 className='display-4' >¿Quieres saber más?</h2>
      <p >Envíanos tus consultas y nos pondremos en contacto contigo</p>   
    <img class="img-fluid rounded" src={doctorimg} alt=""/>
    </div>
    <div>
    <Form /> 
    </div>
    
    
    
    </div>
    
      
  )
}

export default Contact