import { useState } from 'react'
import { columnsFromBackend } from './mockdata'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TaskCard } from './TaskCard'
import { Container, TaskColumnStyles, TaskList, Title } from './Kanban.styled'

export const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend)

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return

    const { source, destination } = result
    
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }
  }

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column]) => {
            const { title, items } = column
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => {
                  return (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                      <Title>{title}</Title>
                      {items.map((item, index) => (
                        <TaskCard key={item.id} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  )
                }}
              </Droppable>
            )
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  )
}
