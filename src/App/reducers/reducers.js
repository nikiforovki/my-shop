import { createSlice } from "@reduxjs/toolkit";
import procts from '../Product/products.json'

































// const initialState = {
//   orders: [],
//   products: [],
//  };
 
//  const orderReducer = (state = initialState, action) => {
//   switch (action.type) {
//   case 'ADD_ORDER':
//     return {
//       ...state,
//       orders: [...state.orders, action.payload],
//       products: state.products.map(product =>
//         product.id === action.payload.id
//           ? { ...product, quantity: product.quantity - action.payload.quantity }
//           : product
//       ),
//     };
//   case 'DECREASE_QUANTITY':
//     return {
//       ...state,
//       orders: state.orders.map(order =>
//         order.id === action.payload.id
//           ? { ...order, quantity: order.quantity - action.payload.quantity }
//           : order
//       ),
//     };
//   case 'CANCEL_ALL':
//     return {
//       ...state,
//       orders: [],
//     };
//   default:
//     return state;
//   }
//  };
 
//  export default orderReducer;
 
