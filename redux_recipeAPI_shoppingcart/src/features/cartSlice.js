import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addtocart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.idMeal === action.payload.idMeal,
      );

      if (!itemExists) {
        state.cartItems.push(action.payload);
      }
    },

    removeitemCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.idMeal !== action.payload,
      );
    },
  },
});

export const { addtocart, removeitemCart } = cartSlice.actions;

export default cartSlice.reducer;
