import { createContext, Dispatch, useReducer } from 'react'
import logger from 'use-reducer-logger';
import { todoReducer } from '../../redux/reducers/todo.reducer'
import { store } from 'shared/redux/state'
import { IInitialState,} from 'shared/types/interfaces/interfaces'

export const TodoListContext = createContext<{
  state: IInitialState,
  dispatch: Dispatch<any>
}>({
  state: store,
  dispatch: () => null,
});

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(todoReducer), store)

  return (
    <TodoListContext.Provider value={{state, dispatch}}>
      {children}
    </TodoListContext.Provider>
  )
}
export default TodoProvider
