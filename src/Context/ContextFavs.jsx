import React from "react";

export const FavsContext = React.createContext()

export const FavsProvider = (props) => {

    console.log("provider",props);
    const [favoritos,setFavoritos] = React.useState([])
  
    function addToFavs(){
        setFavoritos([...favoritos, favoritos.length]) //cuenta los numeros enteros
      }
    
      function deleteFromFavs(){
        const newFav = [...favoritos]
        newFav.pop()
        setFavoritos(favoritos.slice(0, favoritos.length -1))
      }

    return(
        <FavsContext.Provider value ={{
          favoritos: favoritos, 
          addToFavs: addToFavs,
          deleteFromFavs: deleteFromFavs
          }}>
          
        {props.children}
        </FavsContext.Provider>
    )
}

