import {
	TypedUseSelectorHook, useSelector
} from "react-redux";
import { RootState } from "../combineReducers";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
