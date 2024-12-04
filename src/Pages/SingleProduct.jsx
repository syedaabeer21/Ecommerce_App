import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducers/cartSlice';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const SingleProduct = () => {
  const {id} =useParams();
  console.log(id)

  const [prod,setProd]=useState(null)
  const [message,setMessage] = useState(false)

  
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setProd(res)
  
        
      })
      .catch(err => {
      })
      .finally(() => {
      })
  } , [])

  const dispatch = useDispatch()

  const addtocartItem = () => {
    console.log(prod);
    dispatch(addItem(prod))
    setMessage(true)
    setTimeout(() => setMessage(false), 3000);
    
  }
  return (
    
    <>
       {message && <Box className='container mt-3'> <Stack sx={{ width: '100%'  }} spacing={2}>
      <Alert variant="filled" severity="success">
        Item Added to Cart
      </Alert></Stack></Box>}
     {prod &&(
      <Box className='shadow-lg p-5  rounded container d-flex flex-wrap justify-content-evenly my-5 ' sx={{height:'auto'}}>
        <Box className='d-flex align-item-center ' >
          <img className='img-fluid ' src={prod.thumbnail}/>
        </Box>
        <Box className='mt-4 text-black'>
          <Typography variant='h4'>{prod.title}</Typography>
          <Typography className='mt-4' >Brand : {prod.brand}</Typography><hr/>
          <Typography sx={{color:'rgb(33, 150, 243)'}} variant='h5'>Price : {prod.price}</Typography>
          <Typography className='mt-5'>Ratings : {prod.rating} / 5</Typography>
          <GradeRoundedIcon sx={{color:'rgb(33, 150, 243)'}}/>
          <GradeRoundedIcon sx={{color:'rgb(33, 150, 243)'}}/>
          <GradeRoundedIcon sx={{color:'rgb(33, 150, 243)'}}/>
          <GradeRoundedIcon sx={{color:'rgb(33, 150, 243)'}}/>
          <StarHalfIcon sx={{color:'rgb(33, 150, 243)'}}/>
          <Typography className='mt-5'>Shipping : {prod.shippingInformation}</Typography>
          <Typography>Warranty : {prod.warrantyInformation}</Typography>
          <Typography>Return Policy : {prod.returnPolicy}</Typography>
          <Button className='mt-3' variant="contained" onClick={addtocartItem}>ADD TO Cart</Button>
        </Box>
        <Box className='mt-3 container p-5'>
          <Typography variant='h4' sx={{color:'rgb(33, 150, 243)'}} >Description</Typography><hr/>
          <Typography  className='mt-2' variant='body1'>{prod.description}</Typography>
          <Typography className='mt-4' variant="h6" color="rgb(33, 150, 243)">Product Reviews</Typography><hr/>
          <Typography variant="subtitle1" color="grey">{prod.reviews[0].reviewerName} : "{prod.reviews[0].comment}"</Typography>
          <Typography variant="subtitle1" color="grey">{prod.reviews[1].reviewerName} : "{prod.reviews[1].comment}"</Typography>
        </Box>
      </Box>
    
      
     )}
    </>
  )
}

export default SingleProduct
