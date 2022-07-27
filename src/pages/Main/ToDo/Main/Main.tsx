import React, { useState } from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
} from './Main.style'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { DropDownMenu } from 'components/uikit/DropDownMenu'
import TodoCardComponent from './components/TodoCardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../../../redux/actions'
import { RootState } from '../../../../redux/store'


export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState<boolean>(false)
  const [todoDescription, setTodoDescription] = useState("");
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch()
  const todoList = useSelector((state: RootState) => state.todoReducer.list)

  const openCreateWindow = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log(1)
    //refactor!
    setActiveDropDown(!activeDropDown)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <MainContainer>
      <MainWrapper>
        <MainWrapperTodo>
          <TodoCount>length</TodoCount>
          <TodoAddNewTask>
            <AiOutlinePlusCircle onClick={openCreateWindow}/>
            <TodoNewTaskTitle>add new task</TodoNewTaskTitle>
            <DropDownMenu
              width={200}
              activeDropDown={activeDropDown}
            >
              <>
                <input
                  type="text"
                  placeholder="text"
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="description"
                  value={todoDescription}
                  onChange={(e) => setTodoDescription(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={() => dispatch(addTodo(todoText))}
                >
                  add task
                </button>
              </>
            </DropDownMenu>
          </TodoAddNewTask>
        </MainWrapperTodo>
        {todoList.map((todo) => {
          return (
            <TodoCardComponent
              key={todo.id}
              id={todo.id}
              description={todo.description}
              completed={todo.completed}

            />
          )
        })}
      </MainWrapper>
    </MainContainer>
  )
}