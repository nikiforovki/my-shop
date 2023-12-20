import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../../App/components/productSlice.js';

export const store = configureStore({
 reducer: {
  product: productReducer,
  // другие reducers...
 },
});
























// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../components/productSlice.js';

// const store = configureStore({
//  reducer: {
//    products: productReducer,
//  },
// });

// export default store;

