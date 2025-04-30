import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterProducts, sortProducts } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';
import { 
  Grid, 
  Container, 
  Typography, 
  Box, 
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Paper,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import TuneIcon from '@mui/icons-material/Tune';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, filteredItems, status, error, activeFilter } = useSelector(state => state.products);
  
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  
  const handleFilterChange = (e) => {
    dispatch(filterProducts(e.target.value));
  };
  
  const handleSortChange = (e) => {
    const method = e.target.value;
    setSortOrder(method);
    dispatch(sortProducts({ method }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Filter products based on search term
  const displayedProducts = searchTerm 
    ? filteredItems.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredItems;
  
  // Show loading state
  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  // Show error state
  if (status === 'failed') {
    return (
      <Alert severity="error">
        Error loading products: {error}
      </Alert>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
          Products
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '800px' }}>
          Browse our collection of premium products. Find everything you need at competitive prices.
        </Typography>
        
        <Paper elevation={1} sx={{ p: 2, mt: 3, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Category</InputLabel>
                <Select
                  value={activeFilter}
                  label="Category"
                  onChange={handleFilterChange}
                >
                  <MenuItem value="all">All Products</MenuItem>
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="clothing">Clothing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortOrder}
                  label="Sort By"
                  onChange={handleSortChange}
                >
                  <MenuItem value="default">Featured</MenuItem>
                  <MenuItem value="price-low-high">Price: Low to High</MenuItem>
                  <MenuItem value="price-high-low">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Top Rated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          {displayedProducts.length} Products Found
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard 
              product={product}
            />
          </Grid>
        ))}
      </Grid>
      
      {displayedProducts.length === 0 && (
        <Box sx={{ textAlign: 'center', my: 5, py: 5 }}>
          <Typography variant="h6">No products found</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try adjusting your search or filter criteria
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProductList;