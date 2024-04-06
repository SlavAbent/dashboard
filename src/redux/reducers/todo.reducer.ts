import { TodoActionsTypes } from "types/enums/todoEnums";
import { TodoAction } from "types/interfaces/todoInterfaces";
import { store } from "redux/state";
import { IInitialState } from "types/interfaces/interfaces";

//TODO refactoring to sliced
export const todoReducer = (state: typeof store, action: TodoAction): IInitialState => {
	const { type, payload } = action;
	const newTodo = state.todos.filter(elem => elem.id !== payload);
	const toggledTodo = state.todos.map(elem => elem.id === payload
		? { ...elem, completed: !elem.completed }
		: elem
	);

	switch (type) {
	case TodoActionsTypes.ADD_TODO:
		return <IInitialState>{
			todos: [
				payload,
				...state.todos,
			]
		};
	case TodoActionsTypes.DELETE_TODO:
		return {
			todos: newTodo
		};
	case TodoActionsTypes.TOGGLE_TODO:
		return {
			todos: toggledTodo
		};
	case TodoActionsTypes.VIEW_LIST:
		return {
			...state,
			toggleTodoCards: !state.toggleTodoCards
		};

	default: return state;
	}
};
