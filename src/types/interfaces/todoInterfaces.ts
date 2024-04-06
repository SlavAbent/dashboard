import { TodoActionsTypes } from "../enums/todoEnums";

interface IAddTodo {
  type: TodoActionsTypes.ADD_TODO,
  payload: number | string,
}

interface IDeleteTodo {
  type: TodoActionsTypes.DELETE_TODO,
  payload: number | string,
}
interface IToggleTodo {
  type: TodoActionsTypes.TOGGLE_TODO,
  payload: number | string,
}

interface ITodoToggleCards {
  type: TodoActionsTypes.VIEW_LIST,
  payload: boolean
}

export type TodoAction = IAddTodo | IDeleteTodo | IToggleTodo | ITodoToggleCards
