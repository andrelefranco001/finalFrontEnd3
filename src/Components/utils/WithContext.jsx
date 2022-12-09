import React from "react";
import { FavsContext } from "../../Context/ContextFavs";
import unDoctor from "../../Funtions/unDoctor";


export const WithContext = () => {
    
    const favValue = React.useContext(FavsContext)
    console.log(favValue);
    return (
        <div>
        {/* Se accede a los dos elementos del contexto */}
        <h1>With Context</h1>

        {/* 'addToFavs' accede a la funcion para agregar */}
        <button onClick={favValue.addToFavs}>Agregar</button>
        <button onClick={favValue.deleteFromFavs}>Borrar</button>
        {/* el map accede al listado */}
            {favValue.favoritos.map((item) => (
                <p key={item}>{item}</p>
                ))}
        </div>
    )
}