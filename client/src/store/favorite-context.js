import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteProduct) => {},
    removeFavorite: (productId) => {},
    itemIsFavorite: (productId) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteProduct) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteProduct);
        });
    }

    function removeFavoriteHandler(productId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(product => productId !== product.id)
        })
    }

    function itemIsFavoriteHandler(productId) {
        return userFavorites.some(product => product.id === productId);
    }

    

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    
    return ( 
       <FavoritesContext.Provider value={context}>
           {props.children}
       </FavoritesContext.Provider>
    );
}

export default FavoritesContext;