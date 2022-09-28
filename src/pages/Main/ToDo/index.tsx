import React from 'react'

import  Header  from './Header'
import  Main  from './Main'
// import  Footer  from './Footer'

import { ToDoWrapper } from './index.style'

export const ToDo = (props) => {
  const {
    onAddTask,
    onEditListTitle,
    onRemoveTask,
    onEditTask,
    onCompleteTask,
    lists,
    activeItem,
    setActiveItem,
  } = props
  return (
      <ToDoWrapper>
          <Header/>
          <Main
            lists={lists}
            onAddTask={onAddTask}
            onEditTitle={onEditListTitle}
            onRemoveTask={onRemoveTask}
            onEditTask={onEditTask}
            onComplete={onCompleteTask}
            withoutEmpty
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          {/*<Footer/>*/}
      </ToDoWrapper>
  )
}