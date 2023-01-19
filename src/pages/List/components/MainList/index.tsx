import React, { useContext } from 'react'
import { MainTodoList } from './components/MainTodoList'
import { MainListHeader } from './components/MainListHeader'
import { MainListWrapper } from './MainList.style'
import { ListContext } from '../utility/context/ListProvider'

const MainList = () => {
  const { response } = useContext(ListContext)
  return (
      <MainListWrapper>
        <MainListHeader data={response}/>
        <MainTodoList />
      </MainListWrapper>
  )
}

export default MainList