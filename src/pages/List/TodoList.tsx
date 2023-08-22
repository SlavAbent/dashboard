import React from 'react'
import { Aside } from './components/Aside'
import { MainList } from './components/MainList'

import { TodoListWrapper } from './styles/index.styled'
import { ListProvider } from '../../context/providers/listProvider'

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
