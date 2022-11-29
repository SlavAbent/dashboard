import { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers'
import { store } from '../state'

export const TodoListContext = createContext({});

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, store)

  return (
    <TodoListContext.Provider value={{state, dispatch}}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoProvider