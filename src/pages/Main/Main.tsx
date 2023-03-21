import React from 'react';
import { ToDo } from './ToDo'
import TodoProvider from '../../context/providers/todoProvider'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const Main = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TodoProvider>
        <ToDo/>
      </TodoProvider>
    </DndProvider>


  )
}

export default Main
