import { Dispatch, createContext, useReducer } from "react";

import { IInitialState, } from "types/interfaces/interfaces";
import React from "react";
import logger from "use-reducer-logger";
import { store } from "redux/state";
import { todoReducer } from "../../redux/reducers/todo.reducer";

export const TodoListContext = createContext<{
  state: IInitialState,
  dispatch: Dispatch<any>
}>({
	state: store,
	dispatch: () => null,
});

const TodoProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(logger(todoReducer), store);

	return (
		<TodoListContext.Provider value={{state, dispatch}}>
			{children}
		</TodoListContext.Provider>
	);
};
export default TodoProvider;
