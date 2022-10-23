import React from 'react'

import { useContext } from 'react';
import ProductList from './ProductList';

import FavoritesContext from '../../store/favorite-context';
import './favorites.css';

function FavoritesComponent() {

  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if(favoritesCtx.totalFavorites === 0){
    content = <p className='textPosition'>You got no favorites yet. Start adding some?</p>
  }else{
    content = <ProductList products={favoritesCtx.favorites} />
  }


  return (
    <div className="backgroundFav">
          <div className='pageFavorites'>
              <div className="navbarFavorites"></div>
              <div className="contentFavorites">
                  {content}
              </div>
          </div>
    </div>
  );
}

export default FavoritesComponent;