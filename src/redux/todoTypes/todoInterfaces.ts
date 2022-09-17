import { TodoActionsTypes } from './todoEnums'

// TODO: refactor any
export interface IInitialState {
  todos: any[]
}

interface IAdd_Todo {
  type: TodoActionsTypes.ADD_TODO,
  payload: any[]
}

interface IDelete_Todo {
  type: TodoActionsTypes.DELETE_TODO,
  payload: any[]
}
interface IToggle_Todo {
  type: TodoActionsTypes.TOGGLE_TODO,
  payload: any[]
}

export type TodoAction = IAdd_Todo | IDelete_Todo | IToggle_Todo

