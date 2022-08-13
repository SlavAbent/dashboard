import React, { useContext, useState } from 'react'
import {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  MainWrapperContent,
} from './Main.style'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { DropDownMenu } from '../../../../components/uikit/DropDownMenu'
import TodoCardComponent from './components/TodoCardComponent'
import { TodoListContext } from '../../../../redux/context/Provider'
import TodoDropDown from './components/TodoDropDown/TodoDropDown'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../../../redux/variables'
import moment from 'moment'

export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [title, setTitle] = useState('')
  const {state: {todos}, dispatch } = useContext(TodoListContext);


  //Functions
  const openCreateWindow = () => setActiveDropDown(!activeDropDown)
  const handleChange = ({target : {value}}) => setTitle(value)

  const handleSubmit = () => {
    setTitle('')
    dispatch({
      type: ADD_TODO,
      payload: {
        id: crypto.randomUUID(),
        title,
        date: moment().format('DD MMM YYYY HH:mm'),
        completed: false
      }
    })
  }

  const handleDeleteTodo = (index) => {
    dispatch({
      type: DELETE_TODO,
      payload: index
    })
  }

  const handleToggleTodo = index => {
    dispatch({
      type: TOGGLE_TODO,
      payload: index
    })
  }

  const handleEnter = e => {
    if(e.key === 'Enter') handleSubmit()
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
                title={title}
                handleEnter={handleEnter}
                handleChange={handleChange}
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
                title={todo.title}
                completed={completed}
                description={description}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleTodo={handleToggleTodo}
              />)
          })}
        </MainWrapperContent>
      </MainWrapper>
    </MainContainer>
  )
}