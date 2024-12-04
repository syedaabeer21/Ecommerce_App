
import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate=useNavigate()
  const move = () => {
    navigate('/products')
  }
  return (
    <>
        <Box className='container d-flex flex-column gap-3 justify-content-center' sx={{height:'80vh', width:'30%'}}>
            <Typography variant='h4'>Login</Typography>
            <TextField id="filled-basic" label="Enter Your Email" variant="filled" />
            <TextField  id="filled-password-input" label="Password" type="password" 
            autoComplete="current-password" variant="filled"/>
            <Link href="#" underline="hover">
            {'Forget Password?'}
            </Link>
            <Button onClick={move} variant="contained">Login</Button>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        </Box>
    </>
  )
}

export default Login
