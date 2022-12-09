import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import unDoctor from '../Funtions/unDoctor';
import doctorimg from '../Assets/dental-care.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {

  const[doctor, setDoctor] = useState(null)

    const params = useParams()
    useEffect(() => {
      unDoctor(params.id, setDoctor)   
    }, [])
    
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico


  
  return (
    <>
    {doctor != null ? (
      <div id='detailDoctor' class="jumbotron">
      <div>
        {/* <h1>Doctor con el id: {params.id}</h1> */}
        <h1 class="display-4">{doctor.name}</h1>
        <hr class="my-4"></hr>
        <img class="img-fluid rounded" src={doctorimg} alt=""/>
        <hr class="my-4"></hr>
        <p class="lead" >Email: {doctor.email}</p>
        <p class="lead">Phone: {doctor.phone}</p>
        <p class="lead">Website: {doctor.website}</p>
        
        <a id='DetButton' href="/contacto" role="button">Contacto</a>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>

        



      </div>
    ) : ('No hay Doctor')}
      
      


    </>
  )
}

export default Detail