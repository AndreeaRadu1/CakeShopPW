import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import "./Card.css";
import Popup from '../popup/Popup';
import { useContext, useState } from 'react';
import FavoritesContext from '../../store/favorite-context';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard(props) {

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const [isShown, setIsShown] = useState(false);
  function toggleFavoriteStatusHandler() {
    if(localStorage.getItem("userInfo")){
        if(itemIsFavorite) {
          favoritesCtx.removeFavorite(props.id);
        }else{
          favoritesCtx.addFavorite({
            id: props.id,
            name: props.name,
            category: props.category,
            ingredients: props.ingredients,
            price: props.price,
            image: props.image,         
          });
        }
    }else{
      //window.prompt("Please login or create an account!");
      setIsShown(true);
    }


  }

  const navigate = useNavigate();
  const navigateToOrderCake = () => {
    navigate('/order-cake');
  }


  return (
    <Card style={{ width: '13rem' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="130"
        image= {props.image}
      />
      <div className="colorCard">
        <CardContent style={{ width: '14rem'}} >
          <Typography gutterBottom variant="h9" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>{props.ingredients}</h4>
            <h4>{props.price}</h4>
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ height: '2rem'}}>
         
         {itemIsFavorite ? 
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={toggleFavoriteStatusHandler} className="colorIconChangeFav" />
            </IconButton> 
            :           
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={toggleFavoriteStatusHandler} className="colorIconChange" />
            </IconButton>
        }

        {/*  <IconButton aria-label="add to favorites" >
            <FavoriteIcon onClick={toggleFavoriteStatusHandler} />
        </IconButton> */}
          <IconButton aria-label="buy">
            <ShoppingBasketIcon onClick={navigateToOrderCake} />
          </IconButton>
        </CardActions>

        {isShown && <Popup />}
      </div>
    </Card>
  );
}
