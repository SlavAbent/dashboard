import { TodoActionsTypes } from '../types/enums/todoEnums'
import { TodoAction } from '../types/interfaces/todoInterfaces'
import { store } from '../state'
import { IInitialState } from '../types/interfaces/interfaces'

export const todoReducer = (state = store, action: TodoAction): IInitialState => {
  const { type, payload } = action
  switch (type) {
    case TodoActionsTypes.ADD_TODO:
      return {
        todos: [
          payload,
          // @ts-ignore
          ...state.todos,
        ]
      }
    case TodoActionsTypes.DELETE_TODO:
      const newTodo = state.todos?.filter(elem => elem.id !== payload)
      return {
        todos: newTodo
      }
    case TodoActionsTypes.TOGGLE_TODO:
      const toggledTodo = state.todos?.map(elem => elem.id === payload
        ? { ...elem, completed: !elem.completed }
        : elem
      )
      return {
        todos: toggledTodo
      }

    default: return state
  }
}