import React from 'react'
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

const TodoCardComponent = (props) => {
  const {title, description, completed, date} = props

  return (
    <TodoCard>
      <TodoCardContainer>
        <TodoCardWrapper>
          <TodoCardTitle>{title}</TodoCardTitle>
          {/*<TodoCardDescription>{description}</TodoCardDescription>*/}
        </TodoCardWrapper>
        <HiOutlineDotsCircleHorizontal/>
      </TodoCardContainer>
      <TodoFooter>
        <TodoDateCreate>{date}</TodoDateCreate>
        <input
          type='checkbox'
        />
        <TodoFixNote>
          <AiOutlinePaperClip/>
        </TodoFixNote>
      </TodoFooter>
    </TodoCard>
  )
}

export default TodoCardComponent