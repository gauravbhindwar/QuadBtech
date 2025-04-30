import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge, 
  Menu, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Avatar,
  Divider,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  
  // Context API cart
  const { cart } = useCart();
  
  // Redux cart
  const reduxCart = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.cart.wishlist || []);
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>My Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          SHOP
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/" 
          selected={isActive('/')}
        >
          <ListItemIcon>
            <HomeIcon color={isActive('/') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/products" 
          selected={isActive('/products')}
        >
          <ListItemIcon>
            <ShoppingBagIcon color={isActive('/products') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/about" 
          selected={isActive('/about')}
        >
          <ListItemIcon>
            <InfoIcon color={isActive('/about') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/cart" 
          selected={isActive('/cart')}
        >
          <ListItemIcon>
            <Badge badgeContent={reduxCart.totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/wishlist" 
          selected={isActive('/wishlist')}
        >
          <ListItemIcon>
            <Badge badgeContent={wishlistItems?.length || 0} color="error">
              <FavoriteIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1} sx={{ backgroundColor: 'white', color: 'text.primary' }}>
        <Container>
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{ 
                display: { xs: 'flex' }, 
                textDecoration: 'none', 
                color: 'primary.main', 
                fontWeight: 700,
                letterSpacing: '.1rem',
                flexGrow: { xs: 1, md: 0 }
              }}
            >
              SHOP
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
              <Button 
                color="inherit" 
                component={Link} 
                to="/"
                sx={{ 
                  mx: 1,
                  fontWeight: isActive('/') ? 700 : 400,
                  color: isActive('/') ? 'primary.main' : 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/products"
                sx={{ 
                  mx: 1,
                  fontWeight: isActive('/products') ? 700 : 400,
                  color: isActive('/products') ? 'primary.main' : 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Products
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/about"
                sx={{ 
                  mx: 1,
                  fontWeight: isActive('/about') ? 700 : 400,
                  color: isActive('/about') ? 'primary.main' : 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                About
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Wishlist">
                <IconButton
                  size="large"
                  color="inherit"
                  component={Link}
                  to="/wishlist"
                  sx={{ 
                    ml: 1,
                    display: { xs: 'none', sm: 'flex' },
                    color: isActive('/wishlist') ? 'error.main' : 'inherit'
                  }}
                >
                  <Badge badgeContent={wishlistItems?.length || 0} color="error">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Shopping Cart">
                <IconButton
                  size="large"
                  color="inherit"
                  component={Link}
                  to="/cart"
                  sx={{ 
                    ml: 1,
                    color: isActive('/cart') ? 'primary.main' : 'inherit'
                  }}
                >
                  <Badge badgeContent={reduxCart.totalItems || 0} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Account">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                    <AccountCircle />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
      
      {renderMenu}
    </Box>
  );
};

export default Header;