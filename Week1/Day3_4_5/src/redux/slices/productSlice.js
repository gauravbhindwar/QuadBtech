import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // In a real app, this would be an API call
    // For demo purposes, we'll just return mock data after a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'Smartphone X',
            price: 799.99,
            description: 'The latest smartphone with advanced features',
            category: 'electronics',
            image: 'https://via.placeholder.com/400x300?text=Smartphone',
            rating: { rate: 4.5, count: 120 }
          },
          {
            id: 2,
            title: 'Laptop Pro',
            price: 1299.99,
            description: 'High-performance laptop for professionals',
            category: 'electronics',
            image: 'https://via.placeholder.com/400x300?text=Laptop',
            rating: { rate: 4.7, count: 85 }
          },
          {
            id: 3,
            title: 'Wireless Headphones',
            price: 199.99,
            description: 'Premium sound quality with noise cancellation',
            category: 'electronics',
            image: 'https://via.placeholder.com/400x300?text=Headphones',
            rating: { rate: 4.3, count: 210 }
          },
          {
            id: 4,
            title: 'Smart Watch',
            price: 249.99,
            description: 'Track your fitness and stay connected',
            category: 'electronics',
            image: 'https://via.placeholder.com/400x300?text=SmartWatch',
            rating: { rate: 4.2, count: 95 }
          },
          {
            id: 5,
            title: 'Men\'s T-Shirt',
            price: 29.99,
            description: 'Comfortable cotton t-shirt for everyday wear',
            category: 'clothing',
            image: 'https://via.placeholder.com/400x300?text=TShirt',
            rating: { rate: 4.1, count: 150 }
          },
          {
            id: 6,
            title: 'Women\'s Jeans',
            price: 59.99,
            description: 'Stylish and durable denim jeans',
            category: 'clothing',
            image: 'https://via.placeholder.com/400x300?text=Jeans',
            rating: { rate: 4.4, count: 180 }
          },
        ]);
      }, 500);
    });
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  filteredItems: [],
  activeFilter: 'all',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const category = action.payload;
      state.activeFilter = category;
      
      if (category === 'all') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === category
        );
      }
    },
    sortProducts: (state, action) => {
      const { method } = action.payload;
      
      switch (method) {
        case 'price-low-high':
          state.filteredItems.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          state.filteredItems.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          state.filteredItems.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
        default:
          // Sort by id (default order)
          state.filteredItems.sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, sortProducts } = productSlice.actions;

export default productSlice.reducer;