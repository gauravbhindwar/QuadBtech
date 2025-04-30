import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  wishlist: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Update totals
      state.totalItems += 1;
      state.totalAmount += action.payload.price;
    },
    
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      
      if (itemToRemove) {
        // Update totals before removing the item
        state.totalItems -= itemToRemove.quantity;
        state.totalAmount -= (itemToRemove.price * itemToRemove.quantity);
        
        // Remove the item
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        const quantityDifference = quantity - item.quantity;
        item.quantity = quantity;
        
        // Update totals
        state.totalItems += quantityDifference;
        state.totalAmount += quantityDifference * item.price;
      }
    },
    
    addToWishlist: (state, action) => {
      const isInWishlist = state.wishlist.some(item => item.id === action.payload.id);
      
      if (!isInWishlist) {
        state.wishlist.push(action.payload);
      }
    },
    
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  addToWishlist, 
  removeFromWishlist, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;