import React, { FC } from 'react'
import { ITodoCard } from './model/TodoCardComponent.model'
import { MinCardTitle, MinCardWrapper } from './styles/MinCard.styles'
import { Delete } from 'components/Icons/Delete/Delete'

export const MinCard:FC<ITodoCard> = ({
    index,
    completed,
    handleDeleteTodo,
    handleToggleTodo,
    title
  }) => {
  return (
    <>
      <MinCardWrapper
        className={completed ? 'completed' : ''}
        onClick={() => handleToggleTodo(index)}
      >
        <MinCardTitle>{title}</MinCardTitle>
      </MinCardWrapper>
      <Delete
        size={16}
        color='#ffffff'
        onClick={() => handleDeleteTodo(index)}
      />
    </>
  )
}

