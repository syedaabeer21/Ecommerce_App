import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({title,price,src,func,addCart}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <CardMedia sx={{ height: 200 }} image={src}/>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18, mt:1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>Rs : {price}</Typography>
      </CardContent>
      <CardActions >
        <Button size="small" onClick={func}>Show More</Button>
        <Button size="small" onClick={addCart} >Add To Cart</Button>
      </CardActions>
    </Card>
  );
}