import React, { FC } from 'react'
import {
  TodoCardTitle,
  TodoCardWrapper,
} from '../Main.style'
import { Delete } from 'components/Icons/Delete/Delete'
import { ITodoCard } from './model/TodoCardComponent.model'

export const MaxCard:FC<ITodoCard> = ({
   index,
   completed,
   handleDeleteTodo,
   handleToggleTodo,
   title
  }) => {

  return (
    <>
      <TodoCardWrapper
        className={completed ? 'completed' : ''}
        onClick={() => handleToggleTodo(index)}
      >
        <TodoCardTitle>{title}</TodoCardTitle>
      </TodoCardWrapper>
      <Delete
        size={16}
        color='#ffffff'
        onClick={() => handleDeleteTodo(index)}
      />
    </>
  )
}

export default MaxCard
