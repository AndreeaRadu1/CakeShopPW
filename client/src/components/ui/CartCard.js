import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './CartCard.css';

export default function BasicCard(props) {
  return (
    <Card className='orderCard'>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Cake Flavour: {props.cakeFlavour} 
        </Typography>
        <Typography variant="h5" component="div">
          Cake Model: {props.cakeModel}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Cake Type: {props.cakes}
        </Typography>
        <Typography variant="body2">
          Date: {props.date}
        </Typography>
        <Typography variant="body2">
          Kg: {props.kg}
        </Typography>
        <Typography variant="body2">
          Message: {props.message}
        </Typography>
        <Typography variant="body2">
          Status: {props.status}
        </Typography>
      </CardContent>
    </Card>
  );
}

