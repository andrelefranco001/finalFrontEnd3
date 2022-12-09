import React, { useState } from "react";
import doctorimg from '../Assets/office.png'
import Doctor from '../Components/Doctor';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [doctors, setDoctors] = useState([])
  
  
  return (
   <div >
    {/* {
      card?.map((item)=>(
        <div className="container" key={item.id}>
        <div className="card-header">
        <img class="img-fluid rounded" src={doctorimg} alt=""/>
        <p>{item.name}</p>
        </div>

        <div>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
        <span>{item.doc}</span>
        <button>Remove</button>
        </div>        
        </div>
      ))}
      <div>
        <span>total price</span>
        <span>Rs - {doc}</span>
      </div> */}
      
    
      
      
      <div id='contactText'>
      <h1 className='display-4'>Página en desarrollo</h1>
      <p>⚠️ Sentimos las molestias ocasionadas ⚠️</p>
      </div>
      <div id="sorry">
      <img class="img-fluid rounded" src={doctorimg} alt=""/>
      </div>
   </div>
  )
}

export default Favs;
