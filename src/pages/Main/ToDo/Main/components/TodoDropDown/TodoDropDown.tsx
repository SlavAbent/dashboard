import React, { useState } from 'react'
import {
  TodoDropDownComponent,
  TodoDropDownButton,
  TodoDropDownDelete,
  TodoDropDownFlexButton,
  TodoDropDownInput,
  TodoDropDownMain
} from './TodoDropDown.styled'

const TodoDropDown = (props) => {
  const {
    title,
    handleEnter,
    handleSubmit,
    handleChange,
  } = props

  const [openDropDown, setOpenDropDown ] = useState(false)

  const closeDropDown = () => {
    setOpenDropDown(openDropDown)
  }

  return (
    <TodoDropDownComponent>
      <TodoDropDownDelete onClick={closeDropDown}>x</TodoDropDownDelete>
      <TodoDropDownMain>
        <TodoDropDownInput
          type="text"
          placeholder="Enter text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <TodoDropDownFlexButton>
          <TodoDropDownButton
            type="submit"
            onClick={handleSubmit}
          >
            add task
          </TodoDropDownButton>
          <TodoDropDownButton>
            edit task
          </TodoDropDownButton>
        </TodoDropDownFlexButton>
      </TodoDropDownMain>
    </TodoDropDownComponent>
  )
}

export default TodoDropDown