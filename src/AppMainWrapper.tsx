import React, { useContext } from 'react'
import { HashRouter } from 'react-router-dom'
import Aside from './components/Panels/Aside/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { AppWrapper, AppMainFields } from './styles/App.styled'
import { ThemeContext } from './components/ThemeContainer/context/ThemeContext'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { panelsReducer } from './redux/reducers/panels'
import thunk from 'redux-thunk'
import {  logger } from 'redux-logger'
import { HeaderComponent } from './components/Header'

const middlewares = [logger, thunk];
export const store = createStore(panelsReducer, applyMiddleware(...middlewares))

export const AppMainWrapper = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <Provider store={store}>
      <AppWrapper color={toggleTheme}>
        <HashRouter>
          <Aside/>
          <AppMainFields>
            <HeaderComponent />
            <RoutesWrapper/>
          </AppMainFields>
        </HashRouter>
      </AppWrapper>
    </Provider>
  )
}
