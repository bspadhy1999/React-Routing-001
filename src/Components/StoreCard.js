import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function StoreCard(props) {
  return (
    <div className="col-md-3 mt-2">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.value.image}
          alt="green iguana"
        />
        <CardContent>
          <small>{props.value.title}</small><br />
          <span className='rounded ps-1 pe-1' style={{backgroundColor:"green",color:"white"}}><small>{props.value.rating.rate}</small> <StarRateIcon style={{width:"18px"}}/></span><small className='ms-2 me-2'>({props.value.rating.count})</small><img style={{width:"80px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /> <br />
          <strong>₹{props.value.price}</strong><br />
          <small>Free Delivery</small>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}