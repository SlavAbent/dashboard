import { TodoActionsTypes } from 'types/enums/todoEnums'

export const addTodo = payload => {
  return {
    type: TodoActionsTypes.ADD_TODO,
    payload
  }
}

export const setTodo = payload => {
  return {
    type: TodoActionsTypes.SET_TODO,
    payload
  }
}

export const deleteTodo = payload => {
  return {
    type: TodoActionsTypes.DELETE_TODO,
    payload
  }
}

export const toggleTodo = payload => {
  return {
    type: TodoActionsTypes.TOGGLE_TODO,
    payload
  }
}

export const viewList = payload => {
  return {
    type: TodoActionsTypes.VIEW_LIST,
    payload
  }
}