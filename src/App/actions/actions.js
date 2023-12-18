// actions.js
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
   });
   
   export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
   });
   
   export const updateProductQuantity = (productId, newQuantity) => ({
    type: 'UPDATE_PRODUCT_QUANTITY',
    payload: { productId, newQuantity },
   });
   