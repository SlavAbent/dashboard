import React from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  TodoCard,
  TodoCardContainer,
  TodoCardWrapper,
  TodoCardTitle,
  TodoCardDescription,
  TodoDateCreate,
  TodoFixNote,
  TodoFooter,
} from './Main.style'
import { AiOutlinePaperClip, AiOutlinePlusCircle } from 'react-icons/ai'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

export const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoCount>123</TodoCount>
          <TodoAddNewTask>
            <AiOutlinePlusCircle/>
            <TodoNewTaskTitle>add new task</TodoNewTaskTitle>
          </TodoAddNewTask>
        </MainWrapperTodo>
        <TodoCard>
          <TodoCardContainer>
            <TodoCardWrapper>
              <TodoCardTitle>title title</TodoCardTitle>
              <TodoCardDescription>desc desc desc</TodoCardDescription>
            </TodoCardWrapper>
            <HiOutlineDotsCircleHorizontal/>
          </TodoCardContainer>
         <TodoFooter>
           <TodoDateCreate>date</TodoDateCreate>
           <TodoFixNote>
             <AiOutlinePaperClip/>
           </TodoFixNote>
         </TodoFooter>
        </TodoCard>
      </MainWrapper>
    </MainContainer>
  )
}