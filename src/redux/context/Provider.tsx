import { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers'
import { initState } from '../state'
import { ADD_TODO, DELETE_TODO, SET_TODO, TOGGLE_TODO } from '../variables'

export const TodoListContext = createContext({});

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initState)

  const value = {
    todos: state.todos,
    addTodo: (title) => dispatch({type: ADD_TODO, title}),
    setTodo: (title) => dispatch({type: SET_TODO, title}),
    deleteTodo: (index) => dispatch({type: DELETE_TODO, index}),
    toggleTodo: index => dispatch({type: TOGGLE_TODO, index})
  }
  return (
    <TodoListContext.Provider value={[state, dispatch]}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoProvider