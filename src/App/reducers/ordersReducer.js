import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 orders: [],
}

const ordersSlice = createSlice({
 name: 'orders',
 initialState,
 reducers: {
  setOrders: (state, action) => {
    state.orders = action.payload
  },
  deleteOrder: (state, action) => {
    state.orders = state.orders.filter(order => order.id !== action.payload)
  },
 },
})

export const { setOrders, deleteOrder } = ordersSlice.actions

export default ordersSlice.reducer
