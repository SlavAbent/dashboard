import { MainWrapperContent } from '../ToDo/Main/Main.style'
import TodoCardComponent from '../ToDo/Main/components/TodoCardComponent'
import React, { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { deleteTodo, toggleTodo } from '../context/actions'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { ITodoList } from '../../../types/interfaces/interfaces'
import { TodoActionsTypes } from '../../../types/enums/todoEnums'

interface IContent {
  todos: ITodoList[]
  dispatch: Dispatch<{ type: TodoActionsTypes; payload: number }>
  setIsColumn: Dispatch<SetStateAction<boolean>>
}
export const Content:FC<IContent> = ( {todos, dispatch, setIsColumn} ) => {
  const handleDeleteTodo = (index: number) => dispatch(deleteTodo(index))
  const handleToggleTodo = (index: number) => dispatch(toggleTodo(index))

  const [{ isDragging }, drag] = useDrag({
    type: 'kanban panel',
    item: {type: 'kanban panel'},
    end: (item, monitor: DragSourceMonitor) => {
      const dragItem = monitor.getDropResult()
      // @ts-ignore
      if(dragItem && dragItem.name === 'Column 1') {
        setIsColumn(true)
      } else {
        setIsColumn(false)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  const content = useMemo(() => {
    return todos && todos.map((todo) => {
      const { description, completed, date, id, title} = todo
      const opacity = isDragging ? 0.4 : 1;
      return (
        <div ref={drag} key={id}>
          <TodoCardComponent
            index={id}
            date={date}
            title={title}
            style={{  opacity }}
            completed={completed}
            description={description}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </div>
      )
    })
  }, [todos])

  return  (
    <MainWrapperContent>
      { content }
    </MainWrapperContent>
  )
}
