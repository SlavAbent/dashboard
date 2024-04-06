import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { reducers } from "./combineReducers";

export default configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)
});
