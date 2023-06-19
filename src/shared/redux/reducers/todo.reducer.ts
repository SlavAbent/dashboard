import { TodoActionsTypes } from 'shared/types/enums/todoEnums'
import { TodoAction } from 'shared/types/interfaces/todoInterfaces'
import { store } from 'shared/redux/state'
import { IInitialState } from 'shared/types/interfaces/interfaces'

export const todoReducer = (state: typeof store, action: TodoAction): IInitialState => {
  const { type, payload } = action
  switch (type) {
    case TodoActionsTypes.ADD_TODO:
      return <IInitialState>{
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
    case TodoActionsTypes.VIEW_LIST:
      return {
        ...state,
        toggleTodoCards: !state.toggleTodoCards
      }

    default: return state
  }
}
