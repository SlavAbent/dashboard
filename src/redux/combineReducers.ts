import { combineReducers } from "redux";
import store from "./store";
import modalSlice from "./reducers/modal/modal.slice";
import panelsSlice from "./reducers/panels/panels.slice";
import kanbanSlice from "./reducers/kanban/kanban.slice";

export const reducers = combineReducers({
	panelsSlice,
	modalSlice,
	kanbanSlice,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
