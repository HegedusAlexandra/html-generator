import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [
      { id: 1, name: 'Termék 1', quantity: 10 },
      { id: 2, name: 'Termék 2', quantity: 20 },
      { id: 3, name: 'Termék 3', quantity: 40 },
      { id: 4, name: 'Termék 4', quantity: 32 },
      // További termékek...
    ],
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;

export default productSlice.reducer;
