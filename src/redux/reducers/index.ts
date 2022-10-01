import { TodoActionsTypes } from '../todoTypes/todoEnums'
import { IInitialState, TodoAction } from '../todoTypes/todoInterfaces'
import { initState } from '../state'



export const todoReducer = (state = initState, action: TodoAction): IInitialState => {
  const { type, payload } = action
  switch (type) {
    case TodoActionsTypes.ADD_TODO:
      return {
        todos: [
          payload,
          ...state.todos,
        ]
      }
    case TodoActionsTypes.DELETE_TODO:
      const newTodo = state.todos.filter(elem => elem.id !== payload)
      return {
        todos: newTodo
      }
    case TodoActionsTypes.TOGGLE_TODO:
      const toggledTodo = state.todos.map(elem => elem.id === payload
        ? { ...elem, completed: !elem.completed }
        : elem
      )
      return {
        todos: toggledTodo
      }

    default: return state
  }
}