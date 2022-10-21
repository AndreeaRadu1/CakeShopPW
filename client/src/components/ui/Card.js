/*import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.abouttimemagazine.co.uk/wp-content/uploads/2016/04/BeasofBloomsbury.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
*/

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

export default function ImgMediaCard(props) {
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="buy">
            <ShoppingBasketIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

/*
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={props.image} className='cardProductsDoi' />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.ingredients}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
*/