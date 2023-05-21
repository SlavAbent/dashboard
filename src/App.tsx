import { Theme } from './styles/Theme'
import ThemeProvider from './context/providers/themeProvider'
import { AppMainFields, AppWrapper, AsideWrapper, AsideWrap } from './styles/App.styled'
import { HashRouter, Link } from 'react-router-dom'
import { Aside } from './components/uikit/Panels/Aside/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Provider } from 'react-redux'
import React, { useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import store from './redux/store'
import Header from './stories/UI/Panels/Header'
import { Home } from './components/Icons/Home'
import { useAppDispatch } from './redux/hooks/useAppDispatch'
import { togglePanels } from './redux/reducers/panels.slice'

const MainComponent = () => {
  const { toggleTheme } = useContext(ThemeContext)

  const dispatch = useAppDispatch()

  const handleToggleMenu = () => dispatch(togglePanels())

  const person = 'Slava'

  const logoContentBody = (
    <>
      <Link to="List">
        <Home size={24} />
      </Link>
    </>
  )

  const headerContentBody = (
    <>
      <Link to="Profile">Profile</Link>
      <Link to="Logout">Logout</Link>
      <Link to="Register">Register</Link>
    </>
  )

  return (
    <AppWrapper color={toggleTheme}>
      <HashRouter>
        <AppMainFields>
          <AsideWrapper>
           <Header
              logo
              date
              search
              avatar
              content
              color={toggleTheme}
              personName={person}
              logoContentBody={logoContentBody}
              headerContentBody={headerContentBody}
              handleToggleMenu={handleToggleMenu}
           />
            <AsideWrap>
              <Aside/>
              <RoutesWrapper/>
            </AsideWrap>
          </AsideWrapper>
        </AppMainFields>
      </HashRouter>
    </AppWrapper>
  )
}

export const App = () => {
  return (
    <Theme>
      <ThemeProvider>
        <Provider store={store}>
          <MainComponent />
        </Provider>
      </ThemeProvider>
    </Theme>
  );
}

export default App;
