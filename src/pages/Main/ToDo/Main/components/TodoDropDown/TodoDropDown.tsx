import React, { Dispatch, SetStateAction, useState } from 'react'
import {
  TodoDropDownComponent,
  TodoDropDownButton,
  TodoDropDownDelete,
  TodoDropDownFlexButton,
  TodoDropDownInput,
  TodoDropDownMain
} from './TodoDropDown.styled'

interface TodoDropDownProps {
  title: string
  handleEnter: (e: React.KeyboardEvent) => void
  handleSubmit: () => void
  handleChange: ({ target: { value } }: { target: { value: any; }; }) => void
  setActiveDropDown: Dispatch<SetStateAction<boolean>>
}

const TodoDropDown = (props: TodoDropDownProps) => {
  const {
    title,
    handleEnter,
    handleSubmit,
    handleChange,
    setActiveDropDown,
  } = props

  const closeDropDown = () => {
    setActiveDropDown(false)
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