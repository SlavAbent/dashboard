import React, { useContext, useState } from 'react'
import {
  MainContainer
} from './Main.style'
import { TodoListContext } from '../../context/provider/todoProvider'
import { ThemeContext } from '../../../../components/ThemeContainer/context/ThemeContext'
import { MainPanel } from '../../../../components/Panels'
import { Content } from '../../components/Content'
import { Header } from '../../components/Header'

export const Main = () => {
  const {state: {todos}, dispatch } = useContext(TodoListContext);
  const { toggleTheme } = useContext(ThemeContext)
  const [isColumn, setIsColumn] = useState(true)

  const Item = <Content dispatch={dispatch} todos={todos} setIsColumn={setIsColumn} />

  return (
    <MainContainer color={toggleTheme}>
      <MainPanel
        title={"Column 2"}
        header={<Header dispatch={dispatch} todos={todos}/>}
        content={isColumn && Item}
      />
      <MainPanel
        title="Column 2"
        header={'вероятно в будущем канбан'}
        content={!isColumn && Item}
      />
    </MainContainer>
  )
}
