import React, { FC } from 'react'
import { KanbanColumnBoard, KanbanColumnBoardHeader } from './KanbanColumn.styled'

interface KanbanColumnProps {
  children?: any
  actionClass?: string
  title?: string
}

export const KanbanColumn:FC<KanbanColumnProps> = (props) => {
  const { children, actionClass, title } = props
  return (
    <KanbanColumnBoard className={"board-column " + actionClass}>
      <KanbanColumnBoardHeader className="board-column-header">
        {title}
      </KanbanColumnBoardHeader>
      {children}
    </KanbanColumnBoard>
  );
}
