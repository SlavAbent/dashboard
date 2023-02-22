import React, { useState } from 'react'
import { MainWrapperTodo, TodoAddNew, TodoAddNewTask, TodoCount, TodoNewTaskTitle } from '../ToDo/Main/Main.style'
import { DropDownMenu } from '../../../components/uikit/DropDownMenu'
import { TodoDropDown } from '../ToDo/Main/components/TodoDropDown/TodoDropDown'
import { addTodo } from '../context/actions'
import moment from 'moment/moment'
import { Plus } from '../../../components/Icons/Plus/Plus'

export const Header = ( {todos, dispatch} ) => {
  const [title, setTitle] = useState('')
  const [activeDropDown, setActiveDropDown] = useState(false)
  const handleEnter = (e) => {
    if(e.key === 'Enter') handleSubmit()
  }

  const openCreateWindow = () => setActiveDropDown((prev) => !prev)
  const handleChange = ({target : { value } }) => setTitle(value)

  const handleSubmit = () => {
    setTitle('')
    dispatch(addTodo({
      id: crypto.randomUUID(),
      title,
      date: moment().format('DD MMM YYYY HH:mm'),
      completed: false
    }))
  }

  return (
    <MainWrapperTodo>
      <TodoCount>{todos.length}</TodoCount>
      <TodoAddNewTask>
        <TodoAddNew onClick={openCreateWindow}>
          <Plus
            color="#ffffff"
            size={12}
          />
          <TodoNewTaskTitle>Добавить</TodoNewTaskTitle>
        </TodoAddNew>
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
  )
}
