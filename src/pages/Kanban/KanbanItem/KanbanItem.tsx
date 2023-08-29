import React, { FC, memo } from 'react'
import { useGrid } from 'muuri-react'
import {
  KanbanItemBoard,
  KanbanItemContent,
  KanbanItemTitle,
  KanbanItemTab, KanbanItemDescription, KanbanItemDelete
} from './KanbanItem.styled'
import { Delete } from '../../../components/Icons/Delete'

interface KanbanItemProps {
  id?: number | string
  title?: string
  description?: string
}

export const KanbanItem: FC<KanbanItemProps> = memo((props) => {
  const { id, title, description } = props
  const gridId = useGrid()

  return (
    <KanbanItemBoard className="board-item">
      <KanbanItemContent className="board-item-content">
        <KanbanItemTitle>{id}</KanbanItemTitle>
        <KanbanItemDescription>{description}</KanbanItemDescription>
        <KanbanItemDelete>
          <Delete
            size={16}
          />
        </KanbanItemDelete>
        <KanbanItemTab className={`tab-item ${gridId.id}-tab-item`} />
      </KanbanItemContent>
    </KanbanItemBoard>
  );
})


