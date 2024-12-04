import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, lessQuantity, removeItem } from '../config/redux/reducers/cartSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const Cart = () => {
  const selector = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = selector.reduce((acc, cval) => acc + cval.price * cval.quantity, 0);

  const deleteCartItem = (item) => {
    dispatch(removeItem(item));
  };

  const cartItemAddQuantity = (item) => {
    dispatch(addQuantity(item));
  };

  const cartItemLessQuantity = (item) => {
    dispatch(lessQuantity(item));
  };

  return (
    <div className="container mt-5">
      {selector.length > 0 ? (
        selector.map((item, index) => (
          <Card className="mb-4 shadow" key={index}>
            <div className="row g-0 align-items-center">
              <div className="col-md-3 text-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid rounded-start"
                  style={{ maxWidth: '150px' }}
                />
              </div>
              <div className="col-md-6">
                <CardContent>
                  <Typography variant="h6" className="fw-bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                  </Typography>
                </CardContent>
              </div>
              <div className="col-md-3 text-center">
                <CardActions className="d-flex justify-content-center align-items-center gap-2">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => cartItemLessQuantity(item)}
                  >
                    -
                  </Button>
                  <Typography variant="body1" className="fw-bold">
                    {item.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => cartItemAddQuantity(item)}
                  >
                    +
                  </Button>
                </CardActions>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => deleteCartItem(item)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <Typography variant="h4" className="text-center mt-5 text-muted">
          No items found in your cart.
        </Typography>
      )}

      {selector.length > 0 && (
        <Typography
          variant="h5"
          className="text-center mt-4 text-success fw-bold"
        >
          Total Price: Rs {totalPrice.toFixed(2)}
        </Typography>
      )}
    </div>
  );
};

export default Cart;
