import moment from 'moment'
import { ADD_TODO, DELETE_TODO, SET_TODO, TOGGLE_TODO, VIEW_LIST } from '../variables'

export const todoReducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        title: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime().toString(),
            title: action.payload,
            date: moment().format('DD MMM YYYY HH:mm'),
            completed: false,
          }
        ]
      }
    case DELETE_TODO:
      const newTodo = state.todos.filter(elem => elem.id !== action.payload)
      return {
        ...state,
        todos: newTodo
      }
    case TOGGLE_TODO:
      const toggledTodo = state.todos.map(elem => elem.id === action.payload
        ? { ...elem, completed: !elem.completed }
        : elem
      )
      return {
        ...state,
        todos: toggledTodo
      }
    case VIEW_LIST:
        return !state
    default: throw new Error('error')
  }
}