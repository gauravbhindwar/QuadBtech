import React from 'react';
import { useCart } from '../../context/CartContext';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Grid, 
  CardMedia, 
  Divider,
  TextField,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartContext = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { items, totalItems, totalAmount } = cart;

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Your Context API Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Looks like you haven't added any products to your Context API cart yet.
          </Typography>
          <Button 
            variant="contained" 
            component={Link} 
            to="/products" 
            color="secondary"
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
        <ShoppingCartIcon sx={{ mr: 1 }} /> Context API Cart
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        This cart is managed using React's Context API for state management across components.
        Changes to this cart won't affect the Redux cart or Prop Drilling cart.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2}>
            <Box sx={{ p: 2, backgroundColor: 'secondary.main', color: 'white' }}>
              <Typography variant="h6">Cart Items ({totalItems})</Typography>
            </Box>
            
            {items.map((item) => (
              <Box key={item.id}>
                <Grid container spacing={2} sx={{ p: 2 }}>
                  <Grid item xs={3} sm={2}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ 
                        width: '100%', 
                        maxHeight: 80, 
                        objectFit: 'contain',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={9} sm={5}>
                    <Typography variant="subtitle1" component={Link} to={`/product/${item.id}`} sx={{ 
                      textDecoration: 'none', 
                      color: 'secondary.main',
                      '&:hover': { textDecoration: 'underline' }
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)} each
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={6} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton 
                      size="small"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      color="secondary"
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    
                    <TextField
                      size="small"
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                          handleQuantityChange(item.id, val);
                        }
                      }}
                      inputProps={{ 
                        style: { textAlign: 'center' },
                        min: 1
                      }}
                      sx={{ width: 60, mx: 1 }}
                      color="secondary"
                    />
                    
                    <IconButton 
                      size="small"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      color="secondary"
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Grid>
                  
                  <Grid item xs={6} sm={2} sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    
                    <IconButton 
                      color="error"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Divider />
              </Box>
            ))}
            
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined" 
                color="error" 
                startIcon={<DeleteIcon />}
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, backgroundColor: '#f8f8f8' }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Typography variant="body1">Subtotal ({totalItems} items)</Typography>
              <Typography variant="body1">${totalAmount.toFixed(2)}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Typography variant="body1">Shipping</Typography>
              <Typography variant="body1" color="success.main">Free</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Typography variant="body1">Tax</Typography>
              <Typography variant="body1">${(totalAmount * 0.10).toFixed(2)}</Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" color="secondary.main">
                ${(totalAmount + (totalAmount * 0.10)).toFixed(2)}
              </Typography>
            </Box>
            
            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
              Checkout
            </Button>
            
            <Button 
              variant="outlined" 
              component={Link} 
              to="/products" 
              fullWidth 
              sx={{ mt: 2 }}
              color="secondary"
            >
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartContext;