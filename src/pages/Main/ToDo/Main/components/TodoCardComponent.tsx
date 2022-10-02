import React from 'react'
import {
  TodoCard,
  TodoCardContainer,
  TodoDateCreate, TodoFixNote,
  TodoFooter
} from '../Main.style'
import { AiOutlinePaperClip } from 'react-icons/ai'
import MaxCard from './MaxCard'
import MinCard from './MinCard'

const TodoCardComponent = (props) => {
  const {
    date,
  } = props

  return (
    <TodoCard>
      <TodoCardContainer>
        <MaxCard props={props}/>
      </TodoCardContainer>
      <TodoFooter>
        <TodoDateCreate>{date}</TodoDateCreate>
        <TodoFixNote>
          <AiOutlinePaperClip/>
        </TodoFixNote>
      </TodoFooter>
    </TodoCard>
  )
}

export default TodoCardComponent
