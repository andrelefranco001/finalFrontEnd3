import doctorimg from '../Assets/doctor.png'
import favicon from '../Assets/add-to-favorites.png'
import Detail from '../Routes/Detail';
import { useContext, useEffect, useState } from 'react';
import { FavsContext } from '../Context/ContextFavs';
import React from "react";
import { getFavFromStorage, isFavorited, removeFavInStorage,setFavInStorage } from './utils/localStorage';

function Doctor ({doctors, handleClick}) {
    
// const {name, username, id} = doctors;
// const {setData} = useContext(null) 

// const addFav = () => {
//   setFavInStorage({name, username, id})
//   setData(getFavFromStorage())
// }

// const removeFav = () => {
//   removeFavInStorage(id);
//   setData(getFavFromStorage());
// };

// const favorite = isFavorited(id);

  return (
    <div className='row'>
    <div className='card-deck' >
        <div class="card-header">
        <img id='Perfil' class="img-fluid rounded" src={doctorimg} alt=""/>
        </div>

        <div class="card-body">
        <p class="card-text">ID Doctor: {doctors.id}</p>
        <h5 className='card-title'>{doctors.name}</h5>
        <p class="card-text">User Name: {doctors.username}</p>
        <a  id='DetButton' type="button" role="button" class="button-34" href={`/dentist/${doctors.id}`}>Details</a>
        <a><img onClick={()=>handleClick(doctors)} class="img-fluid rounded" src={favicon} alt=""/></a>
        {/* <a><img onClick={()=>handleClick(doctors)} class="img-fluid rounded" src={favicon} alt=""/></a> */}
        {/* <button onClick={addFav} className="btn btn-primary btn-sm">⭐</button> */}

        </div>
        </div>

    </div>
  )
}

export default Doctor