import React from 'react'
import { useDispatch } from 'react-redux'
import {
  TodoCard,
  TodoCardContainer,
  TodoCardDescription,
  TodoCardTitle,
  TodoCardWrapper,
  TodoDateCreate, TodoFixNote,
  TodoFooter
} from '../Main.style'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { toggleTodo, removeTodo } from '../../../../../redux/actions'

const TodoCardComponent = ({id, description, completed}) => {
  const dispatch = useDispatch()

  const deleteTodo = () => {
    dispatch(removeTodo(id))
  }

  const handleComplete = () => {
    dispatch(toggleTodo({
      id: id,
      completed: !completed
    }))
  }

  return (
    <TodoCard>
      <TodoCardContainer>
        <TodoCardWrapper>
          <TodoCardTitle>title</TodoCardTitle>
          <TodoCardDescription>{description}</TodoCardDescription>
        </TodoCardWrapper>
        <HiOutlineDotsCircleHorizontal
          onClick={deleteTodo}
        />
      </TodoCardContainer>
      <TodoFooter>
        <TodoDateCreate>date</TodoDateCreate>
        <input
          type='checkbox'
          onClick={handleComplete}
        />
        <TodoFixNote>
          <AiOutlinePaperClip/>
        </TodoFixNote>
      </TodoFooter>
    </TodoCard>
  )
}

export default TodoCardComponent