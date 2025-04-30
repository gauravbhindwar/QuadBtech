import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../redux/slices/cartSlice';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
  Box,
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isDetailView = false }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {product.rating?.rate >= 4.5 && (
        <Chip
          label="Top Rated"
          color="primary"
          size="small"
          sx={{ 
            position: 'absolute', 
            top: 10, 
            right: 10, 
            zIndex: 1,
            fontWeight: 'bold',
          }}
        />
      )}
      
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        height={200}
        sx={{ objectFit: 'contain', padding: 2, backgroundColor: '#f8f8f8' }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating?.rate || 0} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.rating?.count || 0})
          </Typography>
        </Box>
        
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
        
        {isDetailView ? (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary" sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}>
            {product.description}
          </Typography>
        )}
      </CardContent>
      
      <CardActions sx={{ padding: '0 16px 16px', justifyContent: 'space-between' }}>
        <Button 
          size="medium" 
          variant="contained" 
          color="primary"
          fullWidth
          onClick={handleAddToCart}
          startIcon={<ShoppingCartIcon />}
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: 2,
          }}
        >
          Add to Cart
        </Button>
        
        <Box sx={{ display: 'flex', mt: 1, justifyContent: 'space-between', width: '100%' }}>
          <Tooltip title="Add to Wishlist">
            <IconButton 
              color="error" 
              onClick={handleAddToWishlist}
              size="small"
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          
          {!isDetailView && (
            <Tooltip title="View Details">
              <IconButton 
                component={Link} 
                to={`/product/${product.id}`} 
                color="info"
                size="small"
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;