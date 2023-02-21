import React, { Dispatch, SetStateAction } from 'react'
import {
  TodoDropDownComponent,
  TodoDropDownButton,
  TodoDropDownDelete,
  TodoDropDownFlexButton,
  TodoDropDownInput,
  TodoDropDownMain
} from './TodoDropDown.styled'
import { Close } from 'components/Icons/Close/Close'

interface TodoDropDownProps {
  title: string
  handleEnter: (e: React.KeyboardEvent) => void
  handleSubmit: () => void
  handleChange: ({ target: { value } }: { target: { value: any; }; }) => void
  setActiveDropDown: Dispatch<SetStateAction<boolean>>
}

export const TodoDropDown = (props: TodoDropDownProps) => {
  let {
    title,
    handleEnter,
    handleSubmit,
    handleChange,
    setActiveDropDown,
  } = props

  const closeDropDown = () => setActiveDropDown((prev) => !prev)

  return (
    <TodoDropDownComponent>
      <TodoDropDownDelete onClick={closeDropDown}>
        <Close
          color="#000000"
          size={24}
        />
      </TodoDropDownDelete>
      <TodoDropDownMain>
        <TodoDropDownInput
          type="text"
          placeholder="Введите текст"
          value={title}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <TodoDropDownFlexButton>
          <TodoDropDownButton
            type="submit"
            onClick={() => {
              handleSubmit()
              closeDropDown()
            }}
          >
            Добавить задачу
          </TodoDropDownButton>
        </TodoDropDownFlexButton>
      </TodoDropDownMain>
    </TodoDropDownComponent>
  )
}

