// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
 name: 'products',
 initialState: [],
 reducers: {
   setProducts: (state, action) => {
     return action.payload;
   },
   setProductQuantity: (state, action) => {
     const product = state.find(product => product.id === action.payload.id);
     if (product) {
       product.quantity = action.payload.quantity;
     }
   },
 },
});

export const { setProducts, setProductQuantity } = productSlice.actions;
export default productSlice.reducer;
