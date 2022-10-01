import React from 'react'
import {
  TodoCardTitle,
  TodoCardWrapper,
} from '../Main.style'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

const MaxCard = ({props}) => {
  const {
    title,
    index,
    description,
    completed,
    handleDeleteTodo,
    handleToggleTodo,
  }  = props
  return (
    <>
      <TodoCardWrapper
        className={completed ? 'completed' : ''}
        onClick={() => handleToggleTodo(index)}
      >
        <TodoCardTitle>{title}</TodoCardTitle>
        {/*<TodoCardDescription>{description}</TodoCardDescription>*/}
      </TodoCardWrapper>
      <HiOutlineDotsCircleHorizontal
        onClick={() => handleDeleteTodo(index)}
      />

    </>
  )
}

export default MaxCard