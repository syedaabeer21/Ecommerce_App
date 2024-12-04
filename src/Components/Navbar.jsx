import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

    const selector = useSelector(state => state.cart.cart);
    console.log(selector);

    const navigate=useNavigate()
    const moveCart = () =>{
        navigate('../cart')
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Products
          </Typography>
       <Box>
       <ShoppingCartIcon onClick={moveCart} sx={{marginRight: '10px', position:'relative' }} />
       <Typography sx={{position:'absolute', top:6, right:180 , borderRadius:'20px', backgroundColor:'red' ,paddingX:1, fontSize:14   }}>{selector.length}</Typography>
       </Box>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
