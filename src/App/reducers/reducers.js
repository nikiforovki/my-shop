// reducer.js
const initialState = {
    products: [
      { id: 1, name: 'Товар 1', price: 100, quantity: 5 },
      // другие товары...
    ],
   };
   
   const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCT_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.productId
              ? { ...product, quantity: action.payload.newQuantity }
              : product
          ),
        };
      // другие случаи...
      default:
        return state;
    }
   };
   
   export default productReducer;
   
