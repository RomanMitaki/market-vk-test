import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
