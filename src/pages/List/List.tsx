import React from 'react'
import Aside from './components/Aside'
import MainList from './components/MainList'

import { TodoListWrapper } from './TodoList.styled'

export const TodoList = () => {
  return (
    <TodoListWrapper>
      <Aside />
      <MainList />
    </TodoListWrapper>
  )
}