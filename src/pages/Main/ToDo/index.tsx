import React from 'react'

import  Header  from './Header'
import  Main  from './Main'

import { ToDoWrapper } from './index.style'
import ThemeProvider from '../../../components/ThemeContainer/context/ThemeProvider'

export const ToDo = () => {
  return (
    <ToDoWrapper>
      <Header/>
      <Main/>
    </ToDoWrapper>
  )
}
