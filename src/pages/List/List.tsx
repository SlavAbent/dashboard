import React from 'react'
import Aside from './components/Aside'
import MainList from './components/MainList'

import { TodoListWrapper } from './TodoList.styled'
import { ListProvider } from './utility/context/ListProvider'

export const TodoList = () => {
  return (
    <ListProvider>
      <TodoListWrapper>
        <Aside />
        <MainList />
      </TodoListWrapper>
    </ListProvider>
  )
}
