import React from 'react'

import  Header  from './Header'
import  Main  from './Main'
// import  Footer  from './Footer'

import { ToDoWrapper } from './index.style'

export const ToDo = () => {
  return (
    <ToDoWrapper>
      <Header/>
      <Main/>
      {/*<Footer/>*/}
    </ToDoWrapper>
  )
}