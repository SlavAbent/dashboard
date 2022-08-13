import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, VIEW_LIST } from '../variables'

export const todoReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TODO:
      return {
        todos: [
          payload,
          ...state.todos,
        ]
      }
    case DELETE_TODO:
      const newTodo = state.todos.filter(elem => elem.id !== payload)
      return {
        todos: newTodo
      }
    case TOGGLE_TODO:
      const toggledTodo = state.todos.map(elem => elem.id === payload
        ? { ...elem, completed: !elem.completed }
        : elem
      )
      return {
        todos: toggledTodo
      }
    case VIEW_LIST:
        return !state
    default: return state
  }
}