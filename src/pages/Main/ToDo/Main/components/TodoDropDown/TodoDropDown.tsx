import React from 'react'
import {
  TodoDropDownButton,
  TodoDropDownDelete,
  TodoDropDownFlexButton,
  TodoDropDownInput,
  TodoDropDownMain
} from './TodoDropDown.styled'

const TodoDropDown = (props) => {
  const {
    titleRef,
    inputTitleData,
    handleSubmit,
  } = props
  return (
    <TodoDropDown>
      <TodoDropDownDelete>X</TodoDropDownDelete>
      <TodoDropDownMain>
        <TodoDropDownInput
          ref={titleRef}
          type="text"
          placeholder="Enter text"
          onChange={inputTitleData}
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
    </TodoDropDown>
  )
}

export default TodoDropDown