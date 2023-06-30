import { Theme } from './styles/Theme'
import ThemeProvider from './context/providers/themeProvider'
import { AppMainFields, AppWrapper, AsideWrapper, AsideWrap, GlobalStyles } from './styles/App.styled'
import { HashRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import React, { useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import store from './redux/store'
import { Home } from './components/Icons/Home'
import { useAppDispatch } from './redux/hooks/useAppDispatch'
import { togglePanels } from './redux/reducers/panels.slice'
import Aside from './stories/UI/Panels/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { useAppSelector } from './redux/hooks/useAppSelector'
import { Links } from './links/Links'
import Header from './stories/UI/Panels/Header'
import { ToastContainer } from 'react-toastify'

const MainComponent = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const dispatch = useAppDispatch()
  const isOpenMenu = useAppSelector((state) => state.togglePanels.togglePanels);
  const className = `${isOpenMenu ? ' full__menu' : ' min__menu'}`
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

  const asideLinksContent = (
    <Links />
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
              <Aside
                className={className}
                color={toggleTheme}
                asideLinksContent={asideLinksContent}
              />
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
        <GlobalStyles />
        <Provider store={store}>
          <MainComponent />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </Theme>
  );
}

export default App;
