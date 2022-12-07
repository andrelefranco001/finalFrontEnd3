import React from "react";
import doctor from '../Assets/doctor.jpg'


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  return (
    <div className="card">
    <img class="card-img-top" src={doctor} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
      {/* En cada card deberan mostrar en name - username y el id */}
      
            

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐</button>
        
    </div>
  );
};

export default Card;
