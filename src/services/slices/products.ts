import { createSlice } from "@reduxjs/toolkit";
import { TProductsState } from "../../utils/types";

const initialState: TProductsState = {
  products: [],
  isLoading: false,
  hasError: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.isLoading = true;
    },
    requestSuccessed: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    requestFailed: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    increaseItem: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload ? item.qty++ : item,
      );
    },
    decreaseItem: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload ? item.qty-- : item,
      );
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const {
  getRequest,
  requestSuccessed,
  requestFailed,
  deleteItem,
  increaseItem,
  decreaseItem,
} = productsSlice.actions;
export default productsSlice.reducer;
