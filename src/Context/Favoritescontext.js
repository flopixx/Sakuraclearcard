import React, { createContext, useState, useEffect } from "react";

export const Favoritescontext = createContext();
export const FavoritesProvider = (props) => {
  // agregar al local storage

  const [favorites, setfavorites] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("favorito")) {
      let fav = localStorage.getItem("favorito");
      fav = JSON.parse(fav);
      setfavorites(fav);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorito", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (card) => {
    setfavorites([...favorites, card]);
    console.log(card);
  };

  const removeFavorite = (favoriteId) => {
    setfavorites((prevfavorite) => {
      return prevfavorite.filter((idd) => idd.id !== favoriteId);
    });
  };
  const itemisFavorite = (favoriteId) => {
    return favorites.some((ide) => ide.id === favoriteId);
  };

  return (
    <Favoritescontext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        itemisFavorite,
      }}
    >
      {props.children}
    </Favoritescontext.Provider>
  );
};
export default FavoritesProvider;
