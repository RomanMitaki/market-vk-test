import { useSelector } from "react-redux";
import { RootState } from "../../utils/types";

export const useAppSelector = useSelector.withTypes<RootState>();
