import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Aside from './components/Aside/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import Header from './components/Header/Header'
import { AppWrapper } from './styles/App.styled'
import { ThemeContext } from './components/ThemeContainer/context/ThemeContext'

export const AppMainWrapper = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <AppWrapper color={toggleTheme}>
      <BrowserRouter>
        <Aside/>
        <RoutesWrapper/>
        <Header/>
      </BrowserRouter>
    </AppWrapper>
  )
}