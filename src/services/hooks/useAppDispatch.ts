import { useDispatch } from "react-redux";
import { AppDispatch, AppThunk } from "../../utils/types";

export const useAppDispatch = () => useDispatch<AppDispatch & AppThunk>();
