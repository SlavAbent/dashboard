import React, { FC, useContext } from 'react'
import {
  TodoCard, TodoCardContainer
} from '../Main.style'
import { TodoListContext } from '../../../context/provider/todoProvider'
import { MinCard } from 'components/Panels/Card/MinCard'
import { Delete } from 'components/Icons/Delete/Delete'
import { MaxCard } from 'components/Panels/Card/MaxCard'
import { ITodoCard } from './model/TodoCardComponent.model'

const TodoCardComponent:FC<ITodoCard> = (
  {
   index,
   completed,
   handleDeleteTodo,
   handleToggleTodo,
   title,
   date,
   description,
   style,
 }) => {
  const { state: { toggleTodoCards} } = useContext(TodoListContext);

  const completeTask = completed ? 'completed' : ''

  return (
    <TodoCard>
      <TodoCardContainer>
        { toggleTodoCards ? (
          <MaxCard
            date={date}
            title={title}
            style={style}
            description={description}
            className={completeTask}
            onClick={() => handleToggleTodo(index)}
            icon={
              <Delete
                size={16}
                color='#ffffff'
                onClick={() => handleDeleteTodo(index)}
              />
            }
          />
        ) : (
          <MinCard
            className={completeTask}
            onClick={() => handleToggleTodo(index)}
            title={title}
            icon={
              <Delete
                size={16}
                color='#ffffff'
                onClick={() => handleDeleteTodo(index)}
              />
            }
          />
        )}
      </TodoCardContainer>
    </TodoCard>
  )
}

export default TodoCardComponent
