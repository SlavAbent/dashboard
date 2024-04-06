import {
	useDispatch,
} from "react-redux";
import { AppDispatch } from "../combineReducers";

export const useAppDispatch = () => useDispatch<AppDispatch>();
