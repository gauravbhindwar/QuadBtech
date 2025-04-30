import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton,
  TextField,
  Button,
  List,
  ListItem,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      {/* Features section */}
      <Box sx={{ py: 4, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <LocalShippingIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  Free Shipping
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  On all orders over $50
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <PaymentIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  Secure Payment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100% secure payments
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <SecurityIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  Money Back Guarantee
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  30 days return policy
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <SupportAgentIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  24/7 Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicated customer support
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Main footer */}
      <Box sx={{ backgroundColor: '#1976d2', color: 'white', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                SHOP-STATE
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Demonstrating React state management approaches with a professional e-commerce experience.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton color="inherit" aria-label="Facebook" size="small">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter" size="small">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram" size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn" size="small">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Shop
              </Typography>
              <List disablePadding>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/products" color="inherit" underline="hover">All Products</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/products?category=electronics" color="inherit" underline="hover">Electronics</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/products?category=clothing" color="inherit" underline="hover">Clothing</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/cart-redux" color="inherit" underline="hover">My Cart</Link>
                </ListItem>
                <ListItem disableGutters>
                  <Link href="/wishlist" color="inherit" underline="hover">My Wishlist</Link>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Customer Service
              </Typography>
              <List disablePadding>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/shipping-policy" color="inherit" underline="hover">Shipping Policy</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/returns" color="inherit" underline="hover">Returns & Exchanges</Link>
                </ListItem>
                <ListItem disableGutters sx={{ pb: 0.5 }}>
                  <Link href="/faq" color="inherit" underline="hover">FAQs</Link>
                </ListItem>
                <ListItem disableGutters>
                  <Link href="/privacy-policy" color="inherit" underline="hover">Privacy Policy</Link>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Stay Updated
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Subscribe to our newsletter for news and special offers.
              </Typography>
              <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  placeholder="Your email address"
                  size="small"
                  fullWidth
                  variant="outlined"
                  sx={{ 
                    mb: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    input: { color: 'white' }
                  }}
                />
                <Button 
                  variant="contained" 
                  color="secondary"
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
              © {new Date().getFullYear()} SHOP-STATE. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="/terms" color="inherit" underline="hover" variant="body2">Terms of Use</Link>
              <Link href="/privacy" color="inherit" underline="hover" variant="body2">Privacy</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;