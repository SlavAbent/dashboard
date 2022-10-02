import React from 'react'
import {
  MainContainerListAside,
  MainWrapper,
  MainWrapperContent,
  MainWrapperTodo,
  TodoAddNewTask,
  TodoNewTaskTitle
} from '../../../Main/ToDo/Main/Main.style'

const Tasks = () => {
  return (
    <MainContainerListAside>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoAddNewTask className="bigTodo">
            <TodoNewTaskTitle>Фронтенд</TodoNewTaskTitle>
            <input type="text" placeholder="Новая задача"/>
          </TodoAddNewTask>
        </MainWrapperTodo>
        <MainWrapperContent className="bigTodoTask">
          <div>
            <input type="checkbox"/>
            <p>задача</p>
            <span>x</span>
          </div>
        </MainWrapperContent>
      </MainWrapper>
    </MainContainerListAside>
  )
}

export default Tasks
