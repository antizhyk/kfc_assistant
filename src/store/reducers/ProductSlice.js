import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
    order: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cart.find(item => item.id === product.id);
      if (productInCart) {
        productInCart.count += 1;
      } else {
        state.cart.push({ id: product.id, count: 1 });
      }
    },
    removeOneProductFromCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cart.find(item => item.id === product.id);
      if (productInCart) {
        productInCart.count -= 1;
        if (productInCart.count === 0) {
          state.cart = state.cart.filter(item => item.id !== product.id);
        }
      }
    },
    addOrder: (state, action) => {
      state.order = action.payload;
    },
  },
})

export const { addProductToCart, removeOneProductFromCart, addOrder } = ProductSlice.actions;
export default ProductSlice.reducer; 