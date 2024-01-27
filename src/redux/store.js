import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import { thunk } from 'redux-thunk';

export const myStore = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    }
})

