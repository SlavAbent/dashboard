import React from 'react';
import { ToDo } from './ToDo'
import TodoProvider from './ToDo/context/provider/todoProvider'

const Main = () => {
  return (
    <TodoProvider>
      <ToDo/>
    </TodoProvider>
  )
}

export default Main
