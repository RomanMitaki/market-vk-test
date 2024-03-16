import { getProducts } from "../../utils/api";
import { AppDispatch } from "../../utils/types";
import {
  getRequest,
  requestFailed,
  requestSuccessed,
} from "../slices/products";

export const renderProducts = () => (dispatch: AppDispatch) => {
  dispatch(getRequest());
  getProducts()
    .then((res) => dispatch(requestSuccessed(res)))
    .catch(() => dispatch(requestFailed()));
};
