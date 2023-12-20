import { createSlice, createAction } from '@reduxjs/toolkit';
import products from '../../Product/products.json';

const initialState = products; // начальное состояние

export const revertAll = createAction('REVERT_ALL');

const productSlice = createSlice({
 name: 'products',
 initialState,
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
 extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
});

export const { setProducts, setProductQuantity } = productSlice.actions;
export const selectProduct = state => state; 
export const selectQuantities = state => state.product.quantities
export const selectSelectedProducts = state => state.product.selectedProducts
export const selectHandleQuantityChange = state => state.product.handleQuantityChange
export const selectHandleCheckboxChange = state => state.product.handleCheckboxChange
export const selectHandleOrderClick = state => state.product.handleOrderClick
export default productSlice.reducer;

