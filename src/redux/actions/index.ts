import { ADD_TODO, DELETE_TODO, SET_TODO, TOGGLE_TODO, VIEW_LIST } from '../variables'

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const setTodo = payload => {
  return {
    type: SET_TODO,
    payload
  }
}

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  }
}

export const toggleTodo = payload => {
  return {
    type: TOGGLE_TODO,
    payload
  }
}

export const viewList = payload => {
  return {
    type: VIEW_LIST,
    payload
  }
}