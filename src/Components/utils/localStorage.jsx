const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const setFavInStorage = (doctors) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter((fav) => {
      return fav.id === doctors.id;
    });
    if (isFavOnList.length === 0) {
      storageFavs.push(doctors);
      localStorage.setItem("favs", JSON.stringify(storageFavs));
      alert("Doctor agregado a favoritos");
    } else {
      alert("Doctor ya se encuentra en favoritos ");
    }
  };

  const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex((fav) => fav.id === id);
    if (index !== -1) {
      storageFavs.splice(index, 1);
      localStorage.setItem("favs", JSON.stringify(storageFavs));
      alert("Doctor eliminado de favoritos");
    } else {
      alert("A ocurrido un error");
    }
  };

  const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter((fav) => {
      return fav.id === id;
    });
    return isFavOnList.length === 1;
  };
  
  export { isFavorited, removeFavInStorage, getFavFromStorage, setFavInStorage };