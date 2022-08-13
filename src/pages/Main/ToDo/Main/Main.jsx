import React, { useContext, useRef, useState } from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  MainWrapperContent,
} from './Main.style'
import {
  TodoDropDown,
  TodoDropDownDelete,
  TodoDropDownInput,
  TodoDropDownButton,
  TodoDropDownMain,
  TodoDropDownFlexButton,
} from './components/TodoDropDown/TodoDropDown.styled'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { DropDownMenu } from '../../../../components/uikit/DropDownMenu'
import TodoCardComponent from './components/TodoCardComponent'
import { TodoListContext } from '../../../../redux/context/Provider'
import { addTodo, deleteTodo, setTodo, toggleTodo } from '../../../../redux/actions'

export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)

  const [{ todos }, dispatch] = useContext(TodoListContext);
  const titleRef = useRef(null)

  const openCreateWindow = () => {
    setActiveDropDown(!activeDropDown)
  }

  const inputTitleData = () => {
    // current value problem
    dispatch(setTodo(titleRef.current.value))
    dispatch(setTodo(''))
  }

  const handleSubmit = () => {
    dispatch(addTodo(titleRef.current.value))
    dispatch(setTodo(''))
  }

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index))
  }

  const handleToggleTodo = index => {
    dispatch(toggleTodo(index))
  }

  return (
    <MainContainer>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoCount>{todos.length}</TodoCount>
          <TodoAddNewTask >
            <AiOutlinePlusCircle onClick={openCreateWindow}/>
            <TodoNewTaskTitle>add task</TodoNewTaskTitle>
            <DropDownMenu
              width={200}
              activeDropDown={activeDropDown}
            >
                <TodoDropDown
                  titleRef={titleRef}
                  inputTitleData={inputTitleData}
                  handleSubmit={handleSubmit}
                />
            </DropDownMenu>
          </TodoAddNewTask>
        </MainWrapperTodo>
        <MainWrapperContent>
        {todos.map((todo) => {
          const { description, completed, date, id} = todo
          return (
            <TodoCardComponent
              key={id}
              index={id}
              date={date}
              title={titleRef.current.value}
              completed={completed}
              description={description}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
              // handleViewCard={handleViewCard}
            />)
        })}
        </MainWrapperContent>
      </MainWrapper>
    </MainContainer>
  )
}