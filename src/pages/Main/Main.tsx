import React from 'react'
import { ToDo } from './ToDo'

export const Main = (props) => {
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
    <ToDo
      lists={lists}
      onAddTask={onAddTask}
      onEditTitle={onEditListTitle}
      onRemoveTask={onRemoveTask}
      onEditTask={onEditTask}
      onCompleteTask={onCompleteTask}
      withoutEmpty
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
  )
}
