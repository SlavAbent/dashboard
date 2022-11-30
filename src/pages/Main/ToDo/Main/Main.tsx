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
import { TodoListContext } from '../context/provider/todoProvider'
import TodoDropDown from './components/TodoDropDown/TodoDropDown'
import moment from 'moment'
import { ThemeContext } from '../../../../components/ThemeContainer/context/ThemeContext'
import { addTodo, deleteTodo, toggleTodo } from '../context/actions'

export const Main = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)
  const [title, setTitle] = useState<string>('')
  // @ts-ignore
  const {state: {todos}, dispatch } = useContext(TodoListContext);
  const { toggleTheme } = useContext(ThemeContext)

  //Functions
  const openCreateWindow = () => setActiveDropDown(!activeDropDown)
  const handleChange = ({target : {value}}) => setTitle(value)

  const handleSubmit = () => {
    setTitle('')
    dispatch(addTodo({
      id: crypto.randomUUID(),
      title,
      date: moment().format('DD MMM YYYY HH:mm'),
      completed: false
    }))
  }

  const handleDeleteTodo = (index: number) => dispatch(deleteTodo(index))

  const handleToggleTodo = (index: number) => dispatch(toggleTodo(index))

  const handleEnter = e => {
    if(e.key === 'Enter') handleSubmit()
  }

  return (
    <MainContainer color={toggleTheme}>
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
    </MainContainer>
  )
}
