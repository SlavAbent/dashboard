import { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers'
import { initState } from '../state'

export const TodoListContext = createContext({});

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initState)

  return (
    <TodoListContext.Provider value={{state, dispatch}}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoProvider