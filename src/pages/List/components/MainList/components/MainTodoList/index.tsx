import React, { FC } from 'react'
import { MainTodoListWrapper } from './components/styles/index.styled'
import { uniqueId } from 'lodash'
import { Tasks } from '../../../utility/types/index.model'
import Task from './Task/Task'

interface IMainTodoListProps {
  tasks: Tasks
  onRemove: (listId: number, id: number) => void
  onEdit: (listId: number, p: { id: number; text: string | undefined }) => void
  onComplete: (listId: number, id: number, event: any) => void
}

export const MainTodoList:FC<IMainTodoListProps> = ({ tasks, onRemove, onEdit, onComplete }) => {

  return (
    <>
      {
        // @ts-ignore
        tasks && tasks.map((task: Tasks) => {
        const { completed, id, listId, text} = task
        return (
         <MainTodoListWrapper key={uniqueId(`list_${listId}_${id}`)}>
           <Task
             id={id}
             text={text}
             listId={listId}
             onEdit={onEdit}
             onRemove={onRemove}
             completed={completed}
             onComplete={onComplete}

           />
         </MainTodoListWrapper>
        )
      })}
    </>
  )
}
