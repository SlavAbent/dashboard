import React from 'react'
import { ListWrapper } from './List.style'
import  Header  from '../Main/ToDo/Header'
import Tasks from './components/Tasks/Tasks'
import ListAside from './components/ListAside/ListAside'

export const ListApp = () => {
  return (
    <ListWrapper>
      <Header/>
      <>
        <ListAside/>
        <Tasks/>
      </>
    </ListWrapper>
  )
}
