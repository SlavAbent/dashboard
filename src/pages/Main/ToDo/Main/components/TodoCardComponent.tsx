import React, { FC, useContext } from 'react'
import {
  TodoCard,
  TodoCardContainer,
  TodoDateCreate, TodoFixNote,
  TodoFooter
} from '../Main.style'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { MaxCard } from './MaxCard'
import { MinCard } from './MinCard'
import { ITodoCard } from './model/TodoCardComponent.model'
import { TodoListContext } from '../../context/provider/todoProvider'

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

  console.log(toggleTodoCards)

  return (
    <TodoCard>
      <TodoCardContainer>
        { toggleTodoCards ? (
          <MaxCard
            description={description}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            index={index}
            style={style}
            title={title}
            completed={completed}
          />
        ) : (
          <MinCard
            description={description}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            index={index}
            style={style}
            title={title}
            completed={completed}
          />
        )}
      </TodoCardContainer>
      { toggleTodoCards ? (
        <TodoFooter>
          <TodoDateCreate>{date}</TodoDateCreate>
          <TodoFixNote>
            <AiOutlinePaperClip/>
          </TodoFixNote>
        </TodoFooter>
      ) : null }
    </TodoCard>
  )
}

export default TodoCardComponent
