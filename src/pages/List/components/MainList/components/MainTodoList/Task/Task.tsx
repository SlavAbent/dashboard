import React, { ChangeEvent, FC, useContext } from 'react'
import { CustomCheckbox } from '../components'
import { MainTodoListIcon, MainTodoListTitle, MainTodoListRow, MainListRow, MainListLeftSide } from '../components/styles/index.styled'
import { Edit } from '../../../../../../../components/Icons/Edit'
import { Delete } from '../../../../../../../components/Icons/Delete'

interface ITaskProps {
  id: number
  text: string | undefined
  listId: number
  onEdit: (listId: number, p: { id: number; text: string | undefined }) => void
  onRemove: (listId: number, id: number) => void
  completed: boolean | undefined
  onComplete: (listId: number, id: number, checked: boolean) => void
  className: string
}

export const Task:FC<ITaskProps> = (props) => {
  const {
    id,
    text,
    listId,
    onEdit,
    onRemove,
    completed,
    onComplete,
    className,
  } = props

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
    onComplete(listId, id, e.target.checked);
  }

  return (
    <MainListRow className={className}>
      <MainListLeftSide>
        <CustomCheckbox
          id={id}
          completed={completed}
          onChange={onChangeTask}
        />
        <MainTodoListTitle className={className}>
          {text}
        </MainTodoListTitle>
      </MainListLeftSide>
      <MainTodoListRow>
        <MainTodoListIcon onClick={() => onEdit(listId, { id, text } )}>
          <Edit />
        </MainTodoListIcon>
        <MainTodoListIcon onClick={() => onRemove(listId, id)}>
          <Delete />
        </MainTodoListIcon>
      </MainTodoListRow>
    </MainListRow>
  )
}

