import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ActionCreator, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { store } from "../services/store";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TGetProductResponse = {
  result: 1 | 0;
  data?: TProduct[];
};

export type TProductMapped = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  qty: number;
};

export type TProductsState = {
  products: TProductMapped[];
  isLoading: boolean;
  hasError: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, unknown, AnyAction>
>;
export type AppDispatch = typeof store.dispatch;
