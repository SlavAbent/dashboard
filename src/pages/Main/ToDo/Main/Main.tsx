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
import { TodoActionsTypes } from '../../../../redux/todoTypes/todoEnums'
import moment from 'moment'

export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [title, setTitle] = useState<string>('')
  // @ts-ignore
  const {state: {todos}, dispatch } = useContext(TodoListContext);


  //Functions
  const openCreateWindow = () => setActiveDropDown(!activeDropDown)
  const handleChange = ({target : {value}}) => setTitle(value)

  const handleSubmit = () => {
    setTitle('')
    dispatch({
      type: TodoActionsTypes.ADD_TODO,
      payload: {
        id: crypto.randomUUID(),
        title,
        date: moment().format('DD MMM YYYY HH:mm'),
        completed: false
      }
    })
  }

  const handleDeleteTodo = (index: number) => {
    dispatch({
      type: TodoActionsTypes.DELETE_TODO,
      payload: index
    })
  }

  const handleToggleTodo = (index: number) => {
    dispatch({
      type: TodoActionsTypes.TOGGLE_TODO,
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
                setActiveDropDown={setActiveDropDown}
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
      {/*<MainWrapper>*/}
      {/*  <MainWrapperTodo>*/}
      {/*    <TodoAddNewTask className="bigTodo">*/}
      {/*      <TodoNewTaskTitle>Фронтенд</TodoNewTaskTitle>*/}
      {/*      <input type="text" placeholder="Новая задача"/>*/}
      {/*    </TodoAddNewTask>*/}
      {/*  </MainWrapperTodo>*/}
      {/*  <MainWrapperContent className="bigTodoTask">*/}
      {/*    <div>*/}
      {/*      <input type="checkbox"/>*/}
      {/*      <p>задача</p>*/}
      {/*      <span>x</span>*/}
      {/*    </div>*/}
      {/*    /!*<TodoCardComponent/>*!/*/}
      {/*  </MainWrapperContent>*/}
      {/*</MainWrapper>*/}
    </MainContainer>
  )
}
