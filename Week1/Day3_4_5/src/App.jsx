import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CartProvider } from './context/CartContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Product components
import ProductList from './components/product/ProductList';

// Cart components
import CartContext from './components/cart/CartContext';
import CartRedux from './components/cart/CartRedux';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

// Home page component
const Home = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ 
        textAlign: 'center',
        py: 6,
        maxWidth: 800,
        mx: 'auto'
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Welcome to our Online Store
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Browse our collection of premium products at competitive prices.
        </Typography>
      </Box>
    </Container>
  );
};

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              minHeight: '100vh'
            }}>
              <Header />
              <Box sx={{ flexGrow: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/cart" element={<CartRedux />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Router>
        </ThemeProvider>
      </CartProvider>
    </Provider>
  )
}

export default App
