import React, { FC } from 'react'
import CustomCheckbox from '../components/CustomCheckbox'
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

const Task:FC<ITaskProps> = (
  {
    id,
    text,
    listId,
    onEdit,
    onRemove,
    completed,
    onComplete,
    className,
  }) => {
  const onChangeTask = (e) => {
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

export default Task
