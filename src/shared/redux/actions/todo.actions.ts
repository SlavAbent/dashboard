import { TodoActionsTypes } from 'shared/types/enums/todoEnums'

export const addTodo = (payload: { id: string; title: string; date: string; completed: boolean }) => {
  return {
    type: TodoActionsTypes.ADD_TODO,
    payload
  }
}

export const setTodo = (payload: boolean) => {
  return {
    type: TodoActionsTypes.SET_TODO,
    payload
  }
}

export const deleteTodo = (payload: number) => {
  return {
    type: TodoActionsTypes.DELETE_TODO,
    payload
  }
}

export const toggleTodo = (payload: number) => {
  return {
    type: TodoActionsTypes.TOGGLE_TODO,
    payload
  }
}

export const viewList = (payload: boolean) => {
  return {
    type: TodoActionsTypes.VIEW_LIST,
    payload
  }
}
