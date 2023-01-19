import React, { useContext } from 'react'
import { HashRouter } from 'react-router-dom'
import Aside from './components/Aside/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import Header from './components/Header/Header'
import { AppWrapper, AppMainFields } from './styles/App.styled'
import { ThemeContext } from './components/ThemeContainer/context/ThemeContext'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { panelsReducer } from './redux/reducers/panels'
import thunk from 'redux-thunk'
const store = createStore(panelsReducer, applyMiddleware(thunk))

export const AppMainWrapper = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <Provider store={store}>
      <AppWrapper color={toggleTheme}>
        <HashRouter>
          <Aside/>
          <AppMainFields>
            <Header/>
            <RoutesWrapper/>
          </AppMainFields>
        </HashRouter>
      </AppWrapper>
    </Provider>
  )
}